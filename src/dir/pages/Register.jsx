import React, {useState} from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import axios from 'axios'


export default function Register() {
  axios.defaults.withCredentials = true;

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [ssn, setSsn] = useState();
    const [tin, setTin] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pin, setPin] = useState();
    const [dob, setDob] = useState();
  
    const register = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:4003/open-an-account", {
              firstName: firstName,
              lastName: lastName,
              emailAddress: emailAddress,
              phoneNumber: phoneNumber,
              address1: address1,
              address2: address2,
              ssn: ssn,
              tin: tin,
              username:username,
              password: password,
              confirmPassword: confirmPassword,
              pin: pin,
              dob: dob       
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
    <div className="register" onSubmit={register}>
      <form className="r">
        <div className="r1">Create an Account</div>
        <div className="r2">p</div>
        <div className="r3">
          Your privacy is very important to us. Help us protect{" "}
        </div>
        <div className="r4">
          your personal information by setting up a secure{" "}
        </div>
        <div className="r4">
          account. This will allow you to complete the application,
        </div>
        <div className="r4">provide documentation needed to process, sign </div>
        <div className="r4">important forms and communicate with us. By </div>
        <div className="r4">
          continuing, you agree to our privacy policy published{" "}
        </div>
        <div className="r4">on this site.</div>
        <div className="r5">
          If you already have an account, log in{" "}
          <Link to="/login" className="r5c">
            here
          </Link>
        </div>
        <Link to="/home" className="rg">Go to homepage</Link>
        <div className="r6">
          <div className="r6h">
            <div className="r6a">First Name*</div>
            <input type="text" required className="r6b" onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="r6hh">
            <div className="r6c">Last Name*</div>
            <input type="text" required className="r6d" onChange={(e) => setLastName(e.target.value)}/>
          </div>
        </div>
        <div className="r6">
          <div className="r6h">
            <div className="r6a">Email Address*</div>
            <input type="text" required  className="r6b" onChange={(e) => setEmailAddress(e.target.value)}/>
          </div>
          <div className="r6hh">
            <div className="r6c">Phone Number*</div>
            <input type="text" required  className="r6d" onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
        </div>
        <div className="r8">
          <div className="r6a">Address Line 1*</div>
          <input type="text" required  className="r8b" onChange={(e) => setAddress1(e.target.value)}/>
        </div>
        <div className="r8">
          <div className="r6a">Address Line 2 (Optional)*</div>
          <input type="text"  className="r8b" onChange={(e) => setAddress2(e.target.value)}/>
        </div>
        <div className="r10">
          <div className="r10h">
            <div className="r10a">Social Security Number (SSN)*</div>
            <input type="text" required  className="r10b" onChange={(e) => setSsn(e.target.value)}/>
          </div>
          <div>
            <div className="r10c">Tax Identification Number (TIN)*</div>
            <input type="text" required  className="r10d" onChange={(e) => setTin(e.target.value)}/>
          </div>
        </div>
        <div className="r10">
        <div className="r10h">
          <div className="r10a">Choose PIN*</div>
          <input type="text" required className="r10b" onChange={(e) => setPin(e.target.value)}/>
        </div>
        <div className="r66hh">
          <div className="r10c">Date Of Birth (DOB)*</div>
          <input type="text" required className="r10d" onChange={(e) => setDob(e.target.value)}/>
        </div>
        </div>
        <div className="r8">
          <div className="r6a">Username*</div>
          <input type="text" required  className="r8b" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="r12">Password Requirements</div>
        <div className="r13"><GoDotFill className="r13c"/>Between 8 and 64 characters</div>
        <div className="r13"><GoDotFill className="r13c"/>At least one lowercase character</div>
        <div className="r13"><GoDotFill className="r13c"/>At least one uppercase character</div>
        <div className="r13"><GoDotFill className="r13c"/>At least one special character</div>
        <div className="r13"><GoDotFill className="r13c"/>At least one numeric character</div>
        <div className="r8">
          <div className="r6a">Password*</div>
          <input type="text" required  className="r8b" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="r8">
          <div className="r6a">Confirm Password*</div>
          <input type="text" required  className="r8b" onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <button type="submit" className="r17">
          Create Account
        </button>
      </form>
    </div>
  );
}
