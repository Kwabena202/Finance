import React, { useState, useEffect } from "react";
import Navd from "./Navd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Changepin() {
  const [username, setUsername] = useState();
  const [pin, setPin] = useState();
  const navigate = useNavigate();


  const updatePin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4003/change-pin", {
          username: username,
          pin: pin,
        })
        .then((result) => {
          console.log(result);
          alert(result.data);
          navigate(`/settings`);

        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };


  return (
    <div className="cht">
      <Navd />
      <form className="cp">
        <div className="cp1">Change PIN</div>
        <div>
        <input
          type="text"
          placeholder="Choose New PIN"
          required
          className="cp3"
          onChange={(e) => setPin(e.target.value)}
        />
       </div>
        <div> 
          <input
          type="text"
          placeholder="Enter Username"
          required
          className="cp3"
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <button type="submit" className="cp4">
          Submit
        </button>
      </form>
    </div>
  );
}
