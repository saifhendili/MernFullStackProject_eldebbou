const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const Order = require('../../models/Order');

const Product = require('../../models/Product');
const User = require('../../models/User');
const stripe =require('stripe')("sk_test_51KkJdXAKTcryk5Zv4pRrttt41nachGRtQ6QPg8YYf7DoQVAV16OfWInxcP57DngvDH0us0bEEgWZi4YxHeW0xBmT00SwOI2xKk");

const sendEmail=require('../../middleware/sendEmail')


    router.post("/payment/", async (req, res) => {
      const total = req.body.amount;
      console.log("Payment Request recieved for this ruppess", total);

      const payment = await stripe.paymentIntents.create({
        amount: total*100,
        currency: "usd",
      });
    console.log(payment.client_secret)
      res.status(201).send({
        clientSecret: payment.client_secret,
      });
    });




router.post("/premieum/", async (req, res) => {
  
  const payment = await stripe.paymentIntents.create({
    amount: 19*100,
    currency: "usd",
  });
console.log(payment.client_secret)
  res.status(201).send({
    clientSecret: payment.client_secret,
  });
});




router.post("/", auth,async(req, res) => {
  try {
    const me =await User.findById(req.user.id).select('-password');;
    
    const newOrder = new Order ({
      user:req.user.id,
      price: me.Total,
      products: me.panier,
      address: req.body.address,
    
    });
    const users=await User.find()
    users.map(x=>x.typeuser=="Premium"?
   
       sendEmail({
        to:x.email,
        subject:"User Create an order",
        text:`<h1>User Added NeW Order </h1>
        <p>Please go to this link to take this order</p>
       `
      })
    :null)
// newOrder.products.map((x)=>{
  
// let product = Product.findById(x.product)
//    product.remove();

// })

    me.Total=7;
    me.panier=[]
    await  me.save();
    await newOrder.save();
  res.json(newOrder);
} catch (error) {
    
res.status(500).send('Server Error');
}
})


//deliveryy

router.get("/all-orders-without-delivery", auth,async(req, res) => {
  try {
    await Order.find({state:'Witout_Delivery'},function(err,data){
      res.json(data);

    });
} catch (error) {
    
res.status(500).send('Server Error');
}
})


router.put("/reserve-order/:id", auth,async(req, res) => {
  try {
    const order =await Order.findById(req.params.id)
    if (order) {
      order.delivery = req.user.id;
      order.state="Processing"
    }else{
res.status(400).send('can find this user');
    }
    
await order.save()

    res.json(order);
} catch (error) {
    
res.status(500).send('Server Error');
}
})


router.put("/state-order/:id", auth,async(req, res) => {
  try {
    const order =await Order.findById(req.params.id)


    if (order) {
      order.delivery = req.user.id;
      order.state="Delivered"
    }else{
res.status(400).send('can find this user');
    }

await order.save()
res.json(order);

} catch (error) {
    
res.status(500).send('Server Error');
}
})



router.get("/myorders", auth,async(req, res) => {
  try {
    await Order.find({'delivery':req.user.id},function(err,data){
      res.json(data);

    });
} catch (error) {
    
res.status(500).send('Server Error');
}
})


router.post('/reservationdonation/:id',auth,async(req,res)=>{
  
  try {
      const me =await User.findById(req.user.id).select('-password');;
      const product =await Product.findById(req.params.id);
      
      const newProduct =  {
        product:req.params.id,
        name: product.name,
        description: product.description,
        image: product.image,
      };

      await  me.ProductDonate.unshift(newProduct)
      await product.remove();
      await  me.save();
      const productS =await Product.find();

    res.json(productS);
  } catch (error) {
      
  res.status(500).send('Server Error');
  }
})





router.get('/getorderdonation/',auth,async(req,res)=>{
  
  try {
      const me =await User.findById(req.user.id).select('-password');;

    res.json(me.ProductDonate);
  } catch (error) {
      
  res.status(500).send('Server Error');
  }
})






router.put("/switch-to-prem", auth,async(req, res) => {
  try {
    const user =await User.findById(req.user.id)
    if (user) {
      user.typeuser = "Premium"
      
    }else{
res.status(400).send('can find this user');
    }
    
await user.save()

    res.json(user);
} catch (error) {
    
res.status(500).send('Server Error');
}
})


  module.exports = router;

  