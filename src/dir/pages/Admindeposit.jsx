import React, { useState } from "react";
import axios from "axios";
import Nava from "./Nava";



export default function Admindeposit() {
    const [amount, setAmount] = useState();
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState();
  const [transactionSender, setTransactionSender] = useState();
  const [bankName, setBankName] = useState();



const handleWithdraw = async (e) => {
    e.preventDefault();

    if (parseFloat(amount) < 1 || parseFloat(amount) > 100000) {
      setMessage("Withdrawal amount must be between $1 and $100,000");
      alert(setMessage())
      return;
    }

    console.log("soks", username);

    try {
      const response = await axios.post("http://localhost:4003/deposit", {
        username,
        amount: parseFloat(amount),
        transactionSender: transactionSender,
        bankName: bankName
      });

      setMessage(response.data.message);
      alert(response.data)
      setAmount();
      setTransactionSender();
      setBankName();
      console.log(response);
      } catch (error) {
      setMessage("Withdrawal failed");
      console.log("Withdrawal error:", error);
    }

  };





  return (
    <div className="cht">
      <Nava />
      <form className="cp" onSubmit={handleWithdraw}>
        <div className="cp1">Sender Details</div>
        <div>
        <input
          type="text"
          placeholder="Enter Sender"
          value={transactionSender}
          onChange={(e) => setTransactionSender(e.target.value)}
          required
          className="cp3"
        />
        </div>
       
        <div>
        <input
          type="text"
          placeholder="Enter Bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          required
          className="cp3"
        />
        </div>
        <div className="cp1">Transaction Details </div>
        <div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter username"
          value={username}
          required
          className="cp3"
        />
        </div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          required
          className="cp3"
        />
        <div>
          ff
        </div>
        <button type="submit" className="w1" >
          Transact
        </button>
      </form>
    </div>
  )
}
