const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
 
  details:{
    type: String
  },
  accountBalance:{
    type: String
  },
  accountNumber:{
    type: String
  },
  appleMarket:{
    type: String
  },
  teslaMarket:{
    type: String
  },
  xMarket:{
    type: String
  },
  sAccountBalance:{
    type: String
  },
  sInterestRates:{
    type: String
  },
  caStartup:{
    type: String
  },
  caInterest:{
    type: String
  },
  hsaStartup:{
    type: String
  },
  hsaInterest:{
    type: String
  },
  iraStartup:{
    type: String
  },
  iraInterest:{
    type: String
  },
  ecaBalance:{
    type: String
  },
  ecaProfits:{
    type: String
  },
  hsaBalance:{
   type: String 
  },
  hsaProfits:{
   type: String
  },
  iraBalance:{
    type: String
  },
  iraProfits:{
    type: String
  },
  lAccountBalance:{
    type: String
  },
  lInterestRates:{
    type: String
  },
  plStartup:{
    type: String
  },
  plInterest:{
    type:String
  },
  vlStartup:{
    type: String
  },
  vlInterest: {
    type: String
  },
  deleteUser: {
    type: String
  },
  update: {
    type: String
  }
 
});

const Details = mongoose.model("details", userSchema);
module.exports = Details;