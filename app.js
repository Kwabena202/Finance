require("dotenv").config();

const port = 4003;
const express = require("express");
const mongoose = require("mongoose");
const credit = require("express")();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const http = require("http").createServer(credit);
const hf = "mongodb://localhost:27017/Credit";
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multerError = require("./handleError");
const Users = require("./Model/users");
const Details = require("./Model/details");
const { log } = require("console");
const Transactions = require("./Model/Transactions");
const Admins = require("./Model/Admins")
const Deposit = require("./Model/Deposit");
const { Transaction } = require("mongodb");
const { useReducer } = require("react");

credit.use(bodyParser.json());

credit.use(multerError);

const connectionparams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const corsOption = {
  credentials: true,
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT"],
  optionSucessStatus: 200,
};

credit.use(cors(corsOption));
credit.use(cookieParser());

credit.use(express.json());
credit.use(express.urlencoded({ extended: true }));

const validateToken = async (req, res, next) => {
  const usersToken =
    req.headers["x-access-token"] ||
    req.cookies.soks ||
    req.headers["authorization"];

  if (!usersToken) return res.status(405).json({ message: "No auth found" });

  try {
    verify(usersToken, "ACCESS_TOKEN_SECRET", (err, decoded) => {
      if (err) {
        console.error(err);
        return res.status(403).json({ message: "Invalid token" });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error validating token" });
  }
};

credit.post("/open-an-account", async (req, res) => {
  const {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    address1,
    address2,
    ssn,
    tin,
    username,
    password,
    confirmPassword,
    pin,
    dob,
    deleteUser,
    update
  } = req.body;

  try {
    const userExists = await Users.findOne({ emailAddress });

    if (userExists) {
      return res.status(400).send("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new Users({
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      address1,
      address2,
      ssn,
      tin,
      username,
      password: hashPassword,
      confirmPassword,
      pin,
      dob,
      deleteUser: "Delete",
      update: "Update"
    });

    if (user) {
      const details = new Details({
        _id: user._id,

        details: "0.0",
        accountBalance: "500.0",
        accountNumber: "1234567890",
        appleMarket: "0.0",
        teslaMarket: "0.0",
        xMarket: "0.0",
        sAccountBalance: "0.0",
        sInterestRates: "0.0",
        caStartup: "0.0",
        caInterest: "0.0",
        hsaStartup: "0.0",
        hsaInterest: "0.0",
        iraStartup: "0.0",
        iraInterest: "0.0",
        ecaBalance: "0.0",
        ecaProfits: "0.0",
        hsaBalance: "0.0",
        hsaProfits: "0.0",
        iraBalance: "0.0",
        iraProfits: "0.0",
        lAccountBalance: "0.0",
        lInterestRates: "0.0",
        plStartup: "0.0",
        plInterest: "0.0",
        vlStartup: "0.0",
        vlInterest: "0.0",
        deleteUser: "Delete",
        update: "Update"
            });
      console.log(details, "sss");
      await details.save();
    }

    if (password !== confirmPassword) {
      return res.status(400).send("password does not match");
    }

    await user.save();

    return res.status(200).send("User created sucessfully");
  } catch (error) {
    console.error("Error registering user", error);
    return res.status(500).send("Error registering user");
  }
});

credit.post("/create-admin", async (req, res) => {
  const { admin, password } = req.body;

  try {
    const userExists = await Admins.findOne({ admin });

    if (userExists) {
      return res.status(400).send("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new Admins({
      admin,
      password: hashPassword,
    });

    await user.save();

    return res.status(200).send("User created sucessfully");
  } catch (error) {
    console.error("Error registering user", error);
    return res.status(500).send("Error registering user");
  }
});

credit.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ username });
    if (!user) return res.status(400).send("User not found");

    console.log(user);

    const { lastName, firstName, _id: id } = user;

    console.log(lastName, firstName, id);

    const passkey = await bcrypt.compare(password, user.password);
    console.log(passkey);

    if (!passkey) return res.status(400).send("Incorrect Password");

    const genToken = await jwt.sign(
      {
        username,
        lastName,
        firstName,
        id,
      },
      "ACCESS_TOKEN_SECRET",
      { expiresIn: "1d" }
    );
    if (!genToken) return res.send("No access token generated");
    console.log(genToken);

    res.cookie("soks", genToken, { path: "/" });

    return res.status(200).json({ user: user, token: genToken });
  } catch (error) {
    console.log(error);
    res.clearCookie("soks");
    return res.status(500).send("error");
  }
});

credit.post("/login-admin", async (req, res) => {
  const { admin, password } = req.body;
  try {
    const user = await Admins.findOne({ admin });
    if (!user) return res.status(400).send("User not found");

    console.log(user);

    const { _id: id } = user;

    console.log(id);

    const passkey = await bcrypt.compare(password, user.password);
    console.log(passkey);

    if (!passkey) return res.status(400).send("Incorrect Password");

    const genToken = await jwt.sign(
      {
        admin,
        id,
      },
      "ACCESS_TOKEN_SECRET",
      { expiresIn: "1d" }
    );
    if (!genToken) return res.send("No access token generated");
    console.log(genToken);

    res.cookie("soks", genToken, { path: "/" });

    return res.status(200).json({ user: user, token: genToken });
  } catch (error) {
    console.log(error);
    res.clearCookie("soks");
    return res.status(500).send("error");
  }
});

credit.get("/logout", async (req, res, next) => {
  if (req.cookies?.soks) {
    res.clearCookie("soks");
    res.status(203).send("ok");
  } else {
    res.clearCookie("soks");
    res.status(203).send("ok");
  }
  next();
});

credit.get("/logout-admin", async (req, res, next) => {
  if (req.cookies?.soks) {
    res.clearCookie("soks");
    res.status(203).send("ok");
  } else {
    res.clearCookie("soks");
    res.status(203).send("ok");
  }
  next();
});

credit.get("/me", validateToken, async (req, res) => {



  console.log("right");
  var token =
    req.cookies.soks ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];

  if (!token) {
    return res
      .status(400)
      .send("You cannot perform any activities until you are logged in");
  }

  verify(token, "ACCESS_TOKEN_SECRET", async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "inavlid token" });
    } else {
      req.decoded = decoded;

      try {
        const user = await Users.findOne({
          username: req.decoded.username,
        }).select("-password -confirmPassword");
        console.log(user._id);
        if (!user) {
          return res.send("no user");
        }
        const accountDetails = await Details.findOne({ _id: user._id });
        console.log(user, accountDetails);
        console.log("Sadiq", user);

        if (user) {
          return res.json({ user: user, accountDetails: accountDetails });
        } else {
          return res.status(403).send("Sadiq error");
        }

        // if (user && accountDetails) {
        //     return res.send(user);

        //   } else {
        //       return res.status(403).send("Unable to fetch your requested data");
        //   }
      } catch (err) {
        console.log(err);
        return res.status(403).send("Unable to fetch your requested data");
      }
    }
  });
});

credit.post("/withdraw", validateToken, async (req, res) => {
  const { amount, beneficiary, bankName,pin, debit} = req.body;
  try {

    const user = await Users.findOne({
      username: req.decoded.username,
    }).select("-password -confirmPassword");

    const currentUserDetails = await Details.findOne({_id: user._id});

   if (!currentUserDetails) {
    return res.status(404).json({message: "User details not found"});
   }

    const acctBalance = currentUserDetails.accountBalance;


    // const checkPin = currentUserDetails.pin

    if (acctBalance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    currentUserDetails.accountBalance -= amount;
     
    // if (checkPin !== pin){
    //   return res.status(404).json({ message: "incorecct pin" });
    // }

    await currentUserDetails.save();

    const newTransaction = new Transactions({
      transactionOwner: user,
      transactionBeneficiary: beneficiary,

      transactionAmount: amount,
      bankName: bankName,
      debit: "debit"
    });

    await newTransaction.save();

    return res.status(200).json({ message: "Withdrawal sucessful" });
  } catch (error) {
    console.log("Error processing withdrawal:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

credit.get("/transactions", validateToken, async (req, res) => {

  var token =
    req.cookies.soks ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];

  if (!token) {
    return res
      .status(400)
      .send("You cannot perform any activities until you are logged in");
  }

  verify(token, "ACCESS_TOKEN_SECRET", async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "inavlid token" });
    } else {
      req.decoded = decoded;

 
  const page = parseInt(req.query.page)|| 1;
  const limit = parseInt(req.query.limit)|| 10;

  try {
    const user = await Users.findOne({
      username: req.decoded.username,
    }).select("-password -confirmPassword");

    const skip = (page - 1) * limit;

    const transaction = await Transactions.find({transactionOwner: user}).skip(skip).limit(limit).populate({
      path: "transactionOwner",
      select: "firstName lastName username emailAddress",
    });

    if (!transaction) {
      return res.status(404).send("Transactions info not found");
    }

    const totalCount = await Transactions.countDocuments({transactionOwner: user});

    const totalPages = Math.ceil(totalCount / limit);

    const pagination = {
      currentPage: page,
      totalPages: totalPages,
      totalTransaction: totalCount,
    };

    return res.status(200).json({transaction: transaction, pagination: pagination});
  } catch (error) {
    console.error("Error fetching transactions details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
  } )
});

credit.get("/admin-details", async (req, res) => {
  try {
    const adminUsers = await Users.find();
    if (!adminUsers) {
      return res.send("no user");
    }
    console.log("admin", adminUsers);

    if (adminUsers) {
      return res.json({ adminUsers: adminUsers });
    } else {
      return res.status(403).send("Internal error");
    }
  }catch (err) {
    console.log(err);
    return res.status(403).send("Unable to fetch your requested admin data");
  }
});

credit.get("/admin-account-details", async (req, res) => {
  try {
    const adminDetails = await Details.find();
    if (!adminDetails) {
      return res.send("no user");
    }
    console.log("admin", adminDetails);

    if (adminDetails) {
      return res.json({ adminDetails: adminDetails });
    } else {
      return res.status(403).send("Internal error");
    }
  }catch (err) {
    console.log(err);
    return res.status(403).send("Unable to fetch your requested admin data");
  }
});

credit.post("/del-user", async (req, res) => {
  const {username} = req.body;
try{
  const delUser  = await Users.findOne({username})
  console.log(delUser)
if (!delUser){
return res.status(404).send("error")
}
await Users.findOneAndDelete({username})
return res.status(200).send("deleted")
}catch (error){
  console.log("Error deleting user")
  return res.status(500).send("Internal server error")
}
});

credit.post("/del-details", async (req, res) => {
  const {accountNumber} = req.body;
try{
  const delDetails  = await Details.findOne({accountNumber})
  console.log(delDetails)
if (!delDetails){
return res.status(404).send("error")
}
await Details.findOneAndDelete({accountNumber})
return res.status(200).send("deleted")
}catch (error){
  console.log("Error deleting user")
  return res.status(500).send("Internal server error")
}
});

credit.post("/main-user", async (req, res) => { 
  const { 
    _id,
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    address1,
    address2,
    ssn,
    tin,
    username,
    pin,
    dob, } = req.body;

  const findUser = await Users.findOne({ _id: _id });
  if (!findUser) {
    return res.status(404).send("error");
  }
  try {

    const defineVar = await Users.updateOne(
      { _id: _id },
      {
        $set: {
          phoneNumber: phoneNumber,
          username: username,
          lastName: lastName,
          firstName: firstName,
          address1: address1,
          address2: address2,
          ssn: ssn,
          tin: tin,
          pin: pin,
          dob: dob,
          emailAddress: emailAddress
        },
        // $currentDate: { timeStamp: true },
      }
    );
    if (defineVar) {
      return res.status(200).send("sucesfully updated");
    }
  } catch (error) {
    console.log("error");
    return res.status(404).send("error");
  }
});


credit.post("/main-details", async (req, res) => { 
  const { 
    _id,
    details,
    accountBalance,
    accountNumber,
    appleMarket,
    teslaMarket,
    xMarket,
    sAccountBalance,
    sInterestRates,
    caStartup,
    caInterest,
    hsaStartup,
    hsaInterest,
    iraStartup,
    iraInterest,
    ecaBalance,
    ecaProfits,
    hsaBalance,
    hsaProfits,
    iraBalance,
    iraProfits,
    lAccountBalance,
    lInterestRates,
    plStartup,
    plInterest,
    vlStartup,
    vlInterest,
    deleteUser,
    update
  } = req.body;


  try{
  const findUser = await Details.findById(_id);
  console.log(findUser);
  if (!findUser) {
    return res.status(404).send("User not found");
  }

    const detailsVar = {
          details,
          accountBalance,
          accountNumber,
          appleMarket,
          teslaMarket,
          xMarket,
          sAccountBalance,
          sInterestRates,
          caStartup,
          caInterest,
          hsaStartup,
          hsaInterest,
          iraStartup,
          iraInterest,
          ecaBalance,
          ecaProfits,
          hsaBalance,
          hsaProfits,
          iraBalance,
          iraProfits,
          lAccountBalance,
          lInterestRates,
          plStartup,
          plInterest,
          vlStartup,
          vlInterest,
          deleteUser,
          update
        };

        const updatedDetails = await Details.findByIdAndUpdate(_id, detailsVar, {new: true});
    
    if (updatedDetails) {
      return res.status(200).send("sucessfully updated");
    }else {
      return res.status(404).send('Error updating details');
    }
  } catch (error) {
    console.log("error");
    return res.status(404).send("error");
  }
});

credit.post("/deposit", async (req, res) => {
  const { username, amount, sender, bankName, credit } = req.body;
  try {
    console.log(username);
    const withdrawal = await Users.findOne({ username: username });

    console.log(withdrawal);

    const currentUser = withdrawal._id;

    const currentUserDetails = await Details.findOne({
      _id: currentUser,
    });

    const acctBalance = currentUserDetails.accountBalance;

    console.log("Sadiq", acctBalance);

    if (!withdrawal) {
      return res.status(404).json({ message: "User not found" });
    }

    currentUserDetails.accountBalance = (parseInt (currentUserDetails.accountBalance)+ amount).toString();
     

    await currentUserDetails.save();

    const newTransaction = new Deposit({
      transactionOwner: currentUser,
      transactionSender: sender,
      transactionAmount: amount,
      bankName: bankName,
      credit: "credit"
    });

    await newTransaction.save();

    return res.status(200).json({ message: "Withdrawal sucessful" });
  } catch (error) {
    console.log("Error processing withdrawal:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

credit.get("/deposit-his",validateToken, async (req, res) => {

  var token =
    req.cookies.soks ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];

  if (!token) {
    return res
      .status(400)
      .send("You cannot perform any activities until you are logged in");
  }

  verify(token, "ACCESS_TOKEN_SECRET", async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "inavlid token" });
    } else {
      req.decoded = decoded;

  const page = parseInt(req.query.page)|| 1;
  const limit = parseInt(req.query.limit)|| 10;


  try {
    const user = await Users.findOne({
      username: req.decoded.username,
    }).select("-password -confirmPassword");

    const skip = (page - 1) * limit;


    const transactions = await Deposit.find({transactionOwner: user}).skip(skip).limit(limit).populate({
      path: "transactionOwner",
      select: "firstName lastName username emailAddress",
    });

    if (!transactions) {
      return res.status(404).send("Transactions info not found");
    }

    const totalCount = await Deposit.countDocuments({transactionOwner: user});


    const totalPages = Math.ceil(totalCount / limit);

    const pagination = {
      currentPage: page,
      totalPages: totalPages,
      totalTransaction: totalCount,
    };

    return res.status(200).json({transactions: transactions, pagination: pagination});
  } catch (error) {
    console.error("Error fetching transactions details:", error);
    return res.status(500).json({ message: "Internal server error" });
  
  }
}
  })
});

credit.post("/change-user", async (req, res) => { 
  const { 
    emailAddress,
    username,
    } = req.body;

  const findUser = await Users.findOne({ emailAddress: emailAddress });
  if (!findUser) {
    return res.status(404).send("error");
  }
  try {

    const defineVar = await Users.updateOne(
      { emailAddress: emailAddress },
      {
        $set: {
          username: username,
        },
      }
    );
    if (defineVar) {
      return res.status(200).send("sucesfully updated");
    }
  } catch (error) {
    console.log("error");
    return res.status(404).send("error");
  }
});

credit.post("/change-pin", async (req, res) => { 
  const { 
    pin,
    username,
    } = req.body;

  const findUser = await Users.findOne({ username: username });
  if (!findUser) {
    return res.status(404).send("error");
  }
  try {

    const defineVar = await Users.updateOne(
      { username: username },
      {
        $set: {
          pin: pin,
        },
      }
    );
    if (defineVar) {
      return res.status(200).send("sucesfully updated");
    }
  } catch (error) {
    console.log("error");
    return res.status(404).send("error");
  }
});



mongoose
  .connect(hf, connectionparams)
  .then((result) => {
    console.log("sucessfully connected");
  })
  .catch((error) => {
    console.log("error");
  });

http.listen(port, () => {
  console.log("server connected");
});
