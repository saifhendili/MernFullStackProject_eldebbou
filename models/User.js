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

  Role: {
    type: String,
    enum:["Client or Saller","Organisation","Delivery","Admin"],
  },

});

module.exports = User = mongoose.model('user', UserSchema);