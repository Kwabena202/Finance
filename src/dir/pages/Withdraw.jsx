import React, { useState } from "react";
import Navd from "./Navd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Withdraw() {
  const [amount, setAmount] = useState();
  const [pin, setPin] = useState();
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState();
  const [beneficiary, setBeneficiary] = useState();
  const [bankName, setBankName] = useState();
  const navigate = useNavigate();

  const handleWithdraw = async (e) => {
    e.preventDefault();

    if (parseFloat(amount) < 1 || parseFloat(amount) > 100000) {
      setMessage("Withdrawal amount must be between $1 and $100,000");
      alert(setMessage())
      return;
    }

    console.log("soks", username);

    try {
      const response = await axios.post("http://localhost:4003/withdraw", {
        username,
        amount: parseFloat(amount),
        pin: pin,
        beneficiary: beneficiary,
        bankName: bankName
      });

      setMessage(response.data.message);
      setAmount();
      setPin();
      setBeneficiary();
      setBankName();
      console.log(response);
      navigate(`/sucessful`);
  
     
      // setUsername(response.data.username)
    } catch (error) {
      setMessage("Withdrawal failed");
      alert (error)
      console.log("Withdrawal error:", error);
    }

  };
 

  return (
    <div className="c">
      <Navd />
      <form className="cp" onSubmit={handleWithdraw}>
        <div className="cp1">Recipient Details</div>
        <div>
        <input
          type="text"
          placeholder="Enter Beneficiary"
          value={beneficiary}
          onChange={(e) => setBeneficiary(e.target.value)}
          required
          className="cp3"
        />
        </div>
        <input
          type="text"
          placeholder="Enter Account Number"
          required
          className="cp3"
        />
       
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
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Enter PIN"
          required
          className="cp3"
        />
        </div>
        <div>
          ff
        </div>
        <button type="submit" className="w1" >
          Transact
        </button>
      </form>
    </div>
  );
}
