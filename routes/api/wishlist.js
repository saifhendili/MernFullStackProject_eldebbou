  const express = require('express');
  const router = express.Router();

  const auth = require('../../middleware/auth');

const Product = require('../../models/Product');
const User = require('../../models/User');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private


  router.get('/',auth, async (req, res) => {
    try {
        const me =await User.findById(req.user.id);
  
      res.json(me.wishlist);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

  router.get('/:id',auth, async (req, res) => {
    try {
   const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  router.post('/:id',auth,async(req,res)=>{
      try {
          const me =await User.findById(req.user.id).select('-password');;
          const product =await Product.findById(req.params.id);
          
          const newProduct =  {
            product:req.params.id,
            name: product.name,
            description: product.description,
            availibility: product.availibility,
            image: product.image,
            price: product.price,
          };
    

          await  me.wishlist.unshift(newProduct)
    
        await  me.save();
        res.json(me.wishlist);
      } catch (error) {
          
      res.status(500).send('Server Error');
      }
  })

  router.delete('/:id',auth,async(req,res)=>{
    try {
        const me =await User.findById(req.user.id);
        
        me.wishlist = me.wishlist.filter(
            ({ id }) => id !== req.params.id
          );
   await   me.save();
      res.json(me.wishlist);
    } catch (error) {
        
    res.status(500).send('Server Error');
    }
})

 
  // router.post('/', auth, async (req, res) => {
    
  //   try {

  //     const newRequest = new Product({
  //       name: req.body.name,
  //       description: req.body.description,
  //       availibility:req.body.availibility,
  //       image: req.body.image,
  //       price: req.body.price,
  //       dealType:req.body.dealType,
  //       user: req.user.id,
  //       Category:req.body.category
  //     });
  
  //     const mypro = await newRequest.save();
      
  //     res.json(mypro);
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send('Server Error');
  //   }
  // });

  // router.put('/:id', auth, async (req, res) => {
  //   try {
  //     const product = await Product.findById(req.params.id);
  //     if (product) {
  //       product.name= req.body.name,
  //       product.description= req.body.description,
  //       product.availibility=req.body.availibility,
  //       product.image= req.body.image,
  //       product.price= req.body.price,
  //       product.dealType=req.body.dealType,
  //       product.Category=req.body.category
  //       const updatedProduct = await product.save();
  //       res.json(updatedProduct);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });


  // router.delete('/:id', auth, async (req, res) => {
  //   try {
  //     const product = await Product.findById(req.params.id);
  //     await product.remove();
  
  //     res.json({ msg: 'Product removed' });
  //   } catch (err) {
  //     console.error(err.message);
  
  //     res.status(500).send('Server Error');
  //   }
  // });
  
  
  module.exports = router;