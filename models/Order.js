const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user:mongoose.Schema.Types.ObjectId,
  price: Number,
  products: Array,
  propositon:Object,
  address: Object,
  delivery: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: 'delivery',
},
  state:{
    type:  String,
    enum:["Delivered","Processing","Witout_Delivery"],
    default:'Witout_Delivery'

}
});

module.exports = mongoose.model("orders", OrderSchema);