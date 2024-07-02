import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Nava from "./Nava";
import axios from "axios";
import { useNavigate } from "react-router-dom"


export default function Adsettings() {
  const navigate = useNavigate();

  const logout = async (e) => {
    try {
      await axios
        .get("http://localhost:4003/logout-admin")
        .then((result) => {
          console.log(result);
          navigate(`/adlogin`);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400) {
            console.log("error400");
          } else {
            console.log("error404");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="c">
     <Nava />
      <p className="se">
      <div className="se1">Account</div>
        <div className="se2">
            <Link to='/admin-settings-change-password' className="se2a">Change Password <IoIosArrowDroprightCircle  className="se2aa"/></Link>
            <Link to='/admin-settings-change-username' className="se2b">Change Username <IoIosArrowDroprightCircle  className="se22" /></Link>
            <div className="se2b" onClick={logout}>Logout</div>
        </div>
      </p>
    </div>
  );
}
