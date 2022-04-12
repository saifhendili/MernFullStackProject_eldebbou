const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const Order = require('../../models/Order');

const Product = require('../../models/Product');
const User = require('../../models/User');
const stripe =require('stripe')("sk_test_51KkJdXAKTcryk5Zv4pRrttt41nachGRtQ6QPg8YYf7DoQVAV16OfWInxcP57DngvDH0us0bEEgWZi4YxHeW0xBmT00SwOI2xKk");



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


router.post("/", auth,async(req, res) => {
  try {
    const me =await User.findById(req.user.id).select('-password');;
    
    const newOrder = new Order ({
      user:req.user.id,
      price: me.Total,
      products: me.panier,
      address: req.body.address,
    
    });

    me.Total=0;
    me.panier=[]
    await  me.save();
    await newOrder.save();
  res.json(newOrder);
} catch (error) {
    
res.status(500).send('Server Error');
}
})
  
  module.exports = router;