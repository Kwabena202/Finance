const mongoose = require("mongoose");
const depositSchema = new mongoose.Schema({
  transactionOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  transactionSender: {
    type: String,
  },
  timeStamp: {
    type: String,
    default: new Date().toISOString()
  },
  transactionAmount: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  credit: {
    type: String,
    required: true,
  }
});

const Deposit = mongoose.model("Deposit", depositSchema);
module.exports = Deposit;