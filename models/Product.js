const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  availibility: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
    
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dealType: {
    type: String,
    enum:['UsedProduct','Exchange','Donation'],
    default:'UsedProduct',
  },
  
  Category: {
    type: String,
   required:true
  },
  comments: [
    {
      userid: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      text: {
        type: String,
      },
  
    },
  ],
  date: {
    type: Date,
    default:Date.now()
  },
});

module.exports = Product = mongoose.model('product', ProductSchema);