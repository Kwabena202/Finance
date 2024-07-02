import React, {useState, useEffect} from "react";
import Navd from "./Navd";
import axios from "axios";

export default function Deposit() {
  const [user, setUser] = useState();
  const [details, setDetails] = useState();

  const updateAll = async () => {
    console.log("take");
    try {
      await axios
        .get("http://localhost:4003/me")
        .then((result) => {
          console.log(result);
          setUser(result.data.user);
          setDetails(result.data.accountDetails)
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400) {
            console.log("error400");
          } else {
            console.log("error404");
          }
        }); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateAll();
  }, []);


  return (
    <div className="cd">
      <Navd />
      <p className="d">
        <div className="d1">Deposit Money</div>
        <div className="d2">
            <div className="d2a">
                <div>HFCU Account Number</div>
                <div>{details?.accountNumber}</div>
            </div>
            <div className="d2b">
                <div>Bank</div>
                <div>Heritage Financial Credit Union</div>
            </div>
            <div  className="d2c">
                <div>Name</div>
                <div>{user?.firstName} {user?.lastName}</div>
            </div>
        </div>
        <div className="d3">
            <div className="d3a">Deposit money via bank transfer in just 3 steps</div>
            <div className="d3b">
                <div className="d3b1">1.</div>
           <div>Copy the account details above {details?.accountNumber} is your
           HFCU Account Number.
           </div>  
            </div>
            <div className="d3b">
                <div className="d3b1">2.</div>
                <div>Open the bank app or application you want to transfer money from</div>
            </div>
            <div className="d3b">
                <div className="d3b1">3.</div>
                <div>Transfer the desired amount to your HFCU Account</div>
            </div>
        </div>
      </p>
    </div>
  );
}
