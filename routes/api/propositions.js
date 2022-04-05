const express = require('express');
const router = express.Router();
const multer =require('multer')
const auth = require('../../middleware/auth');

const Product = require('../../models/Product');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'client/public/assetes/image/proposition')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  }
})


const upload=multer({storage:storage});


  router.get('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).sort({ date: -1 });
 
      res.json(product.proposition);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


  router.post('/:id',auth, upload.single("images"),async (req, res) => {
  const  product = await Product.findById(req.params.id) 
  const  user = await User.findById(req.user.id); 
  

    try {

      const newRequest ={
        user: req.user.id,
        firstname:user.firstname,
        lastname:user.lastname,
        image: req.file.filename,
        text: req.body.text,
        price: req.body.price,
      };
      await product.proposition.unshift(newRequest);
  
      const mypro = await product.save();
      
      res.json(mypro);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  router.delete('/:id', auth, async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      await product.remove();
  
      res.json({ msg: 'Product removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  
  


// @route    DELETE api/posts/proposition/:id/:proposition
// @desc     Delete proposition
// @access   Private
router.delete('/proposition/:id/:proposition_id', auth, async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      // Pull out proposition
      const proposition = product.proposition.find(
        (prop) => prop.id === req.params.proposition_id
      );
      // Make sure comment exists
      if (!proposition) {
        return res.status(404).json({ msg: 'proposition does not exist' });
      }
    //   // Check user
    //   if (proposition.user.toString() !== req.user.id) {
    //     return res.status(401).json({ msg: 'User not authorized' });
    //   }
  
      Product.proposition = Product.proposition.filter(
        ({ id }) => id !== req.params.proposition_id
      );
  
      await Product.save();
  
      return res.json(Product.proposition);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  });

  module.exports = router;