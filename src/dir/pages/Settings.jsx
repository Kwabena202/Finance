import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Navd from "./Navd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const logout = async (e) => {
    try {
      await axios
        .get("http://localhost:4003/logout")
        .then((result) => {
          console.log(result);
          navigate(`/login`);
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
    <div className="cht">
      <Navd />
      <p className="se">
        <div className="se1">Account</div>
        <div className="se2">
          <Link to="/settings-change-username" className="se2b">
            Change Username <IoIosArrowDroprightCircle className="se22" />
          </Link>
        </div>
        <div className="se3">Payment PIN</div>
        <div className="se4">
          <Link to="/settings-change-pin" className="se4a">
            Change Payment PIN
            <IoIosArrowDroprightCircle className="se4aa" />
          </Link>
          <div className="se4a" onClick={logout}>
            Logout
          </div>
        </div>
      </p>
    </div>
  );
}
