const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

const Product = require('../../models/Product');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private

router.get("/myproducts",auth,async(req,res)=>{

  Product.find({'user':req.user.id},function(err,data){
    if(data){
      res.json(data)

    }else{
      return res.status(500).json(err);

    }
  });

})

  module.exports = router;