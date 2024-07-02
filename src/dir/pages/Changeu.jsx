import React, { useState, useEffect } from "react";
import Navd from "./Navd";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Changeu() {
  const [username, setUsername] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();


  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4003/change-user", {
          username: username,
          emailAddress: emailAddress,
        })
        .then((result) => {
          console.log(result);
          alert(result.data);
          navigate(`/login`);

        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const updateAll = async () => {
    console.log("take");
    try {
      await axios
        .get("http://localhost:4003/me")
        .then((result) => {
          console.log(result);
          setUser(result.data.user);
          setDetails(result.data.accountDetails);
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
      <form className="cp" onSubmit={updateUser}>
        <div className="cp1">Change Username</div>
        <div className="cu">{user?.username}</div>
        <input
          type="text"
          placeholder="Choose New Username"
          required
          className="cp3"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmailAddress(e.target.value)}
            className="cp3"
          />
        </div>
        <button type="submit" className="cp4">
          Submit
        </button>
      </form>
    </div>
  );
}
