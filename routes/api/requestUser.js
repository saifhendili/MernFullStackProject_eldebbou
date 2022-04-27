const express = require('express');
const router = express.Router();
const multer =require('multer')
const auth = require('../../middleware/auth');

const Product = require('../../models/Product');
const User = require('../../models/User');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'client/public/assetes/filesrequest')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  }
})

const upload=multer({storage:storage});

  router.put('/organisation',auth, upload.single("file"),async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        
        user.OrganisationName= req.body.OrganisationName,
        user.fondationDate=req.body.fondationDate,
        user.file= req.file.filename,  
        user.request=true
      await user.save();      
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  router.put('/delivery',auth, upload.single("file"),async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.Matricule= req.body.Matricule,
        user.file= req.file.filename,  
        user.request=true
      await user.save();      
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.get('/delivery',auth, upload.single("file"),async (req, res) => {
    try {
        const users = await User.find({Role:"Delivery"});
           
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  router.get('/organisation',auth, upload.single("file"),async (req, res) => {
    try {
        const users = await User.find({Role:"Organisation"});
           
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.put('/accept-organisation/:id',auth, async (req, res) => {
    try {
  const user=await User.findById(req.params.id)
        user.status=true
        
      await user.save(); 
      const users = await User.find({Role:"Organisation"});     
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  
  router.put('/accept-delivery/:id',auth, async (req, res) => {
    try {
  const user=await User.findById(req.params.id)
        user.status=true
        
      await user.save(); 
      const users = await User.find({Role:"Delivery"});     
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  router.put('/block/:id',auth, async (req, res) => {
    try {
  const user=await User.findById(req.params.id)
        user.blocked=true
      await user.save(); 
      const users = await User.find();     
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  router.put('/unblock/:id',auth, async (req, res) => {
    try {
  const user=await User.findById(req.params.id)
        user.blocked=false
      await user.save(); 
      const users = await User.find();     
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  
  module.exports = router;