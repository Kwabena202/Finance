import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navd from "./Navd";
import axios from "axios";


export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
 useEffect(() => {
  const fetchTransactions = async () => {
    try {
     const response =  await axios
        .get("http://localhost:4003/transactions");
        console.log(response.data)
        setHistory(response.data.transaction ||[]);
        setLoading(false);
    }catch (error){
      console.log("Error fetching transactions");
      setLoading(false);
    }
  };
  fetchTransactions();
}, [])




  return (
    <div className="cht">
      <Navd />
     
      <p className="ht">
        <div className="ht1">Transactions</div>
        <div className="ht22">
          <div className="ht2">
            <Link to="/history" className="htt">
              Debit Transactions
            </Link>
            <Link to="/credit-transactions" className="htt">
              Credit Transactions
            </Link>
          </div>
          <div className="ht3">p</div>
        </div>
        <table  className="tht">
            <tbody>
               {history.map((historys, key) => (
              <tr className="htm"  key={key}>
                <td className="htm1">{historys.timeStamp}</td>
                <td className="htm2">-${historys.transactionAmount}</td>
                <td className="htm3">{historys.transactionBeneficiary}</td>
                <td className="htm3">{historys.bankName}</td>
                <td className="htm2">{historys.debit}</td>
              </tr>
              ))}
            </tbody>
            </table>
      </p>
    </div>
  );
}
