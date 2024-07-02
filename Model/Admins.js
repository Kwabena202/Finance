const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  admin:{
    type: String
  },
  password:{
    type: String
  }
});

const Admins = mongoose.model("admins", adminSchema);
module.exports = Admins;