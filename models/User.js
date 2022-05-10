const mongoose = require('mongoose');
const crypto=require('crypto')

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
  feeling: {
    type: String,
    default: "neutral",
  },
  typeuser: {
    type: String,
    enum:["Premium","Normal"],
    default:"Normal",
  },
  avatar: {
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
  file:{
    type: String,
  },
  status:{
    type: Boolean,
    default:false
  },
  request:{
    type: Boolean, 
    default:false
  },
  OrganisationName:{
    type: String, 
   },
   Matricule:{
    type: String, 
   },
   fondationDate:{
    type:Date
  },
  blocked:{
    type:Boolean,
    default:false
  },
  searchs:[{  
    search: {
    type: String,
  },}],
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
  },
  ProductDonate: [
    {
      product: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'product',
      },
    },  
  ],
  resetPasswordToken:String,
  resetPasswordExpire:Date
});

UserSchema.methods.getResetPasswordToken=function(){
const resetToken=crypto.randomBytes(20).toString("hex");
this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire=Date.now()+10*(60*1000);

return resetToken
}

module.exports = User = mongoose.model('user', UserSchema);