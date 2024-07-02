const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  transactionOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  transactionBeneficiary: {
    type: String,
    // required: false,
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
  debit: {
    type: String,
    required: true,
  }
});

const Transactions = mongoose.model("Transactions", transactionSchema);
module.exports = Transactions;
