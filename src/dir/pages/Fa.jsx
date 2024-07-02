import React, {useState, useEffect} from "react";
import { CgLogOut } from "react-icons/cg";
import Nava from "./Nava";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Fa() {
  const navigate = useNavigate();
  const [_id, set_Id] =useState();
  const [username, setUsername] =useState();
  const [lastName, setLastName] =useState();
  const [firstName, setFirstName] =useState();
  const [emailAddress, setEmailAddress] =useState();
  const [phoneNumber, setPhoneNumber] =useState();
  const [ssn, setSsn] =useState();
  const [tin, setTin] =useState();
  const [pin, setPin] =useState();
  const [dob, setDob] =useState();
  const [address1, setAddress1] =useState();
  const [address2, setAddress2] =useState();

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



  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4003/main-user", {
          _id: _id,
          username: username, 
          phoneNumber: phoneNumber,
          lastName: lastName,
          firstName: firstName,
          address1: address1,
          address2: address2,
          ssn: ssn,
          tin: tin,
          pin: pin,
          dob: dob,
          emailAddress: emailAddress
        })
        .then((result) => {
          console.log(result);
            alert(result.data)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="cht">
     <Nava />
      <p className="c2">
        <div className="c21">
          <div className="c2a">Welcome Admin</div>
          <div className="c2b" onClick={logout}>
            <CgLogOut className="c2bb" />
            Logout
          </div>
        </div>
      </p>
      <form action="" onSubmit={updateUser}>
      <table className="ad2">
        <thead className="ad2a">
          <tr>
            <th className="ad2b1">Change Users</th>
            <th className="ad2b2">Change Users</th>
          </tr>
        </thead>
        
        <tbody className='ad2b'>
        <tr>
          <td className='ad2c1'>
            <input type="text" placeholder="Change Firstname" onChange={(e) => setFirstName(e.target.value)}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change Lastname" onChange={(e) => setLastName(e.target.value)}/>
          </td>
        </tr>
        </tbody>
        <tbody className='ad2b'>
          <tr>
          <td className='ad2c1'>
            <input type="text" placeholder="ID"  onChange={(e) => set_Id(e.target.value)}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change Username"  onChange={(e) => setUsername(e.target.value)}/>
          </td>
          </tr>
        </tbody>
        <tbody  className='ad2b'>
          <tr>
          <td className='ad2c1'>
            <input type="text" placeholder="Change Email" onChange={(e) => setEmailAddress(e.target.value)}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change SSN"  onChange={(e) => setSsn(e.target.value)}/>
          </td>
          </tr>
        </tbody>
        <tbody  className='ad2b'>
          <tr>
          <td className='ad2c1'>
            <input type="text" placeholder="Change TIN"  onChange={(e) => setTin(e.target.value)}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change PIN" onChange={(e) => setPin(e.target.value)}/>
          </td>
          </tr>
        </tbody>
        <tbody className='ad2b'>
          <tr>
          <td>
            <button type="submit">Update</button>
          </td>
          </tr>
        </tbody>
      </table>
        </form>
    </div>
  );
}
