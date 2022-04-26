

const mongoose = require("mongoose");
const OpinionSchema = mongoose.Schema({
    text:String,
    email: String,
});

module.exports = mongoose.model("opinion", OpinionSchema);