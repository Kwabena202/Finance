import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navd from './Navd';
import axios from "axios";


export default function Savehis() {
  const [adeposit, setAdeposit] = useState([]);

  useEffect (() => {
    const fetchDeposits = async () => {
      try {
       const response = await axios
          .get("http://localhost:4003/deposit-his");
          console.log(response.data)
          setAdeposit(response.data.transactions ||[]);
      } catch  (error) {
        console.log("Error fetching deposits")
      }
    };
    fetchDeposits();
  }, []);





  return (
    <div className='cht'>
         <Navd />
      <p className='ht'>
        <div className='ht1'>Transactions</div>
        <div className='ht22'>
        <div className='ht2'>
            <Link to='/history' className='htt'>Debit Transactions</Link>
            <Link to='/credit-transactions' className='htt'>Credit Transactions</Link>
        </div>
        <div className='ht3s'>p</div>
        </div>
        <table className="tht">
            <tbody>
          {adeposit.map((depositsss, key) => (
              <tr className="htm"  key={key}>
                <td className="htm1">{depositsss.timeStamp}</td>
                <td className="htm22">+${depositsss.transactionAmount}</td>
                <td className="htm3">{depositsss.transactionSender}</td>
                <td className="htm3">{depositsss.bankName}</td>
                <td className="htm22">{depositsss.credit}</td>
              </tr>
          ))}
            </tbody>
            </table>
      </p>
    </div>
  )
}
