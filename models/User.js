const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  typeuser: {
    type: String,
    enum:["Premium","Normal"],
    default:"Normal",
  },
  imageUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
  wishlist: [
    {
      product: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'product',
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
      },
      price: {
        type: Number,
        required: true,
      },
      
      
    },  
  ],
  panier: [
    {
      product: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'product',
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
      quantity: {
        type: Number,
        default:1,
      },
      
    },  
  ],
  Role: {
    type: String,
    enum:["Client or Saller","Organisation","Delivery","Admin"],
  },
  Total:{
    type:Number,
    default:7,
  }

});

module.exports = User = mongoose.model('user', UserSchema);