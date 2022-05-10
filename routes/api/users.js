const crypto =require('crypto')
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const sendEmail=require('../../middleware/sendEmail')
const { check, validationResult } = require('express-validator');
const Product = require('../../models/Product');
// const normalize = require('normalize-url');
// @route post api/user
// @desc Test route
//@acess Public


router.get('/', async (req, res) => {
  try {
    const Users = await User.find().sort({ date: -1 });
    res.json(Users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/myprofile/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.remove();

    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});



router.put('/feeling/:feel',auth,async (req, res) => {
  try {
await User.findByIdAndUpdate({_id:req.user.id},{feeling:req.params.feel},{new:false});
const me=await User.findById(req.user.id);

res.json(me)

} catch (err) {

    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  [
    check('firstname', 'firstname is required')
      .not()
      .isEmpty(),
    check('lastname', 'lastname is required')
      .not()
      .isEmpty(),
    check('Role', 'Role of user is required')
      .not()
      .isEmpty(),
    check('birthday', 'date of birthday is required')
      .not()
      .isEmpty(),
      check('city', 'City is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 3 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      firstname,
      lastname,
      Role,
      email,
      city,
      birthday,
      password
    } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Useral ready exists' }] });
      }
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      user = new User({
        firstname,
        lastname,
        email,
        avatar,
        Role,
        city,
        birthday,
        password
      });
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.put('/',auth,async (req, res) => {
  try {
    const me=await User.findById(req.user.id);
    const isMatch = await bcrypt.compare(req.body.oldpassword, me.password);

if(isMatch){
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  const userPassword =await User.findByIdAndUpdate({_id:req.user.id},{password:password},{new:true});
  return res.status(200).json("Password Changed")
}else 
return  res.status(400).json({ errors: [{ msg: 'Password Incorrect' }] });

} catch (err) {

    res.status(500).send('Server Error');
  }
});


router.put('/email',auth,async (req, res) => {
  try {
    const me=await User.findById(req.user.id);
    const isMatch = await bcrypt.compare(req.body.oldpassword, me.password);

if(isMatch){
  
  const userPassword =await User.findByIdAndUpdate({_id:req.user.id},{email:req.body.email},{new:true});
  return res.status(200).json("EmailChanged")
  

}else 
return  res.status(400).json("Incorrect Password")

} catch (err) {

    res.status(500).send('Server Error');
  }
});


router.post('/forgetPassword',async (req, res,next) => {
 const {email} =req.body;
 try {
   const user= await User.findOne({email})
   if(!user){
     return res.status(400).send('Use exes');
   }
   const resetToken=user.getResetPasswordToken()
   await user.save();
   const resetUrl=`http://localhost:3000/passwordreset?resetToken=${resetToken}`
   const message=`
   <h1>You have requested a password reset </h1>
   <p>Please go to this link to reset your password</p>
   <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
   `
  
   try {
     await sendEmail({
       to:user.email,
       subject:"Password Reset Request",
       text:message
     });
     res.status(200).json({success:true,data:"Email Sent"})
   } catch (error) {
     user.resetPasswordToken=undefined;
     user.resetPasswordExpire=undefined;
     await user.save();
    res.status(400).send('Email could not be sent 2');

   }
 } catch (error) {
  res.status(500).send('Server Error');
   
 }
});


router.put('/resetpassword/:resetToken',async (req, res) => {
  console.log("h1")

const resetPasswordToken=crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

try {

  const user =await User.findOne({
    resetPasswordToken,
    resetPasswordExpire:{$gt:Date.now()}
  })
  console.log(user)
  if(!user){
    res.status(400).send('Email could not be sent');
  }
  console.log("h2")
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);
  user.resetPasswordToken=undefined;
  user.resetPasswordExpire=undefined
await user.save();
res.status(201).json({
  success:true,
  data:"Password Reset Success"
})
} catch (error) {
  res.status(500).send('Server Error');
  
}

})






router.post('/get-search',auth,async (req, res) => {
  try {
    const me=await User.findById(req.user.id);
    const products=await Product.find();
let n=0
    products.filter(x=>{
     

      if(x.name.toLowerCase().includes(req.body.search.toLowerCase())){
        console.log("hh0")
        n=n+1
      }
    })
console.log("hh1")
if(n>0){
  const newOrder =  ({
    search:req.body.search,
  });
  me.searchs.unshift(newOrder)
   me.save()
}
   
  return res.status(200).json(me.searchs)
} catch (err) {

    res.status(500).send('Server Error');
  }
});


router.get('/recommandedsys',auth,async (req, res) => {
  try {
    const products=await Product.find();
    const me=await User.findById(req.user.id)
   let j=0;
    let search=[];
    let recommandedPro=[];
me.searchs.filter((x,i)=>{
  if(j<3){
j=j+1
search.push(x)
  }
})
j=0

search.map(p=>{
  j=0
  products.filter(x=>{
  if(j<2){
    if(x.dealType=="UsedProduct"){
  if(x.name.toLowerCase().includes(p.search.toLowerCase())){
    recommandedPro.push(x)
    j=j+1
  }
}
}

  })

})

  return res.status(200).json(recommandedPro)
} catch (err) {
    res.status(500).send('Server Error');
  }
});








module.exports = router;