const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const Product = require('../../models/Product');
const User = require('../../models/User');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private


  router.get('/',auth, async (req, res) => {
    try {
        const me =await User.findById(req.user.id);
  
      res.json(me.panier);
    } catch (err) {
 
      res.status(500).send('Server Error');
    }
  });

  router.get('/total/',auth,async(req,res)=>{
    try {
      const me=await User.findById(req.user.id);
      res.json(me.Total)
    } catch (error) {
      res.status(500).send('Server Error');

    }
  })
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
    
          me.Total=me.Total+product.price
          await  me.panier.unshift(newProduct)
          await  me.save();
        res.json(me.panier);
      } catch (error) {
          
      res.status(500).send('Server Error');
      }
  })

  router.delete('/:id',auth,async(req,res)=>{
    try {
        const me =await User.findById(req.user.id);
     
    me.panier.map((x,i)=>{
     if(x._id==req.params.id){
      me.Total=me.Total- x.price
     }
     })


          me.panier = me.panier.filter(
            ({ id }) => id !== req.params.id,
          
          );
        
   await   me.save();
      res.json(me.panier);
    } catch (error) {
        
    res.status(500).send('Server Error');
    }
    })

  module.exports = router;