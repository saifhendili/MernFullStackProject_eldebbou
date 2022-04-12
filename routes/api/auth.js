const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

router.put('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user) {
      user.firstname= req.body.firstname?req.body.firstname:user.firstname;
     user.lastname=req.body.lastname?req.body.lastname:user.lastname;
     user.city=req.body.city?req.body.city:user.city;
    }
  await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});


// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.remove();

    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});



router.get('/', auth, async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        // { expiresIn: 36000000 },
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



module.exports = router;