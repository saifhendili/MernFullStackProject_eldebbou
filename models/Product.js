const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required:true
  },
  availibility: {
    type: Boolean,
    required:true

  },
  status:{
    type: Boolean,
    default:false,
    required:true

  },
  description: {
    type: String,
    required:true

    
  },
  image: {
    type: String,
    required:true

  },
  price: {
    type: Number,
    required:true

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
  reservation:[

    {
      userid: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      OrganisationName: {
        type: String,
        required:true
      },
      status: {
        type: Boolean,
        default:false,
      },
      fondationDate: {
        type: Date,
        default: Date.now,
      },
  
    },
  ],
  proposition: [
    {
      userid: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      image: {
        type: String,
        // required:true
      },
      firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      description: {
        type: String,
        required:true
      },
      price: {
        type: Number,
        required:true
      },
      status: {
        type: Boolean,
        default:false,
      },
      date: {
        type: Date,
        default: Date.now,
      },
  
    },
  ],
  comments: [
    {
      userid: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      firstname: {
        type: String,
        required:true
      },
      lastname: {
        type: String,
        required:true
      },
      image: {
        type: String,
        required:true
      },
      text: {
        type: String,
        required:true
      },
      date: {
        type: Date,
        default: Date.now,
      },
  
    },
  ],
  date: {
    type: Date,
    default:Date.now()
  },
});

module.exports = Product = mongoose.model('product', ProductSchema);