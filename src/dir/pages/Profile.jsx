import React, {useState, useEffect} from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import axios from "axios";
import Navd from "./Navd";

export default function Profile() {
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
    <div className="cht">
     <Navd />
      <p>
        <div className="p1">
        <RiAccountCircleFill className="p1a" />
        <div className="p1a1">
            <span className="p1a1a">Full Name:</span>
            <span className="p1a1b">{user?.firstName} {user?.lastName}</span>
        </div>
        <div className="p1a2">
            <span className="p1a2a">Mobile Number:</span>
            <span className="p1a2b">{user?.phoneNumber}</span>
        </div>
       
        <div className="p1a2">
            <span className="p1a2dd">Date Of Birth:</span>
            <span className="p1a2d">{user?.dob}</span>
        </div>
        <div className="p1a2">
            <span className="p1a2ee">Email:</span>
            <span className="p1a2e">{user?.emailAddress}</span>
        </div>
        <div className="p1a2">
            <span className="p1a2ff">Address:</span>
            <span className="p1a2f">{user?.address1}</span>
        </div>
        </div>
        <div className="p2">
        <div className="p2a">
            <span className="p2b1">HFCU Account:</span>
            <span className="p2b2">{details?.accountNumber}</span>
        </div>
        <div className="p2b">
            <span className="p2b1">SSN:</span>
            <span className="p2b3">{user?.ssn}</span>
        </div>
        </div>
      </p>
    </div>
  );
}
