const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const Product = require('../../models/Product');
const User = require('../../models/User');

// @route    GET api/comment
// @desc     Get all comment
// @access   Private
router.get('/:id',async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.json(product.comments);
    } catch (error) {
        res.status(500).send('Server Error');
    
  }
})


// @route    Post api/comment
// @access   Private


router.post(
    '/:id',
    [auth, [check('text', 'Text is required').not().isEmpty()]],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const user = await User.findById(req.user.id).select('-password');
        const product = await Product.findById(req.params.id);
  
        const newComment = {
          text: req.body.text,
          firstname: user.firstname,
          lastname: user.lastname,
          image: "image",
          user: req.user.id,
        };
       await product.comments.unshift(newComment);  ////???
        await product.save();
      

      res.json(product.comments);
      } catch (err) {
        res.status(500).send('Server Error');
      }
    }
  );

  
  module.exports = router;