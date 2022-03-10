const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
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
module.exports = router;