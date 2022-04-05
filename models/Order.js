const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user:mongoose.Schema.Types.ObjectId,
  price: Number,
  products: Array,
  address: Object,
});

module.exports = mongoose.model("orders", OrderSchema);