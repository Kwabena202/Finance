import React, {useState, useEffect} from "react";
import { CgLogOut } from "react-icons/cg";
import Nava from "./Nava";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Ud() {
  const navigate = useNavigate();
  const [formData, setFormData] = 
  useState({
    _id: "",
    accountBalance: "",
    accountNumber: "",
    sAccountBalance:"",
    appleMarket:"",
    teslaMarket:"",
    xMarket:"",
    sAccountBalance:"",
    sInterestRates:"",
    caStartup:"",
    caInterest:"",
    hsaStartup:"",
    hsaInterest:"",
    iraStartup:"",
    iraInterest:"",
    ecaBalance:"",
    ecaProfits:"",
    hsaBalance:"",
    hsaProfits:"",
    iraBalance:"",
    iraProfits:"",
    lAccountBalance:"",
    lInterestRates:"",
    plStartup:"",
    plInterest:"",
    vlStartup:"",
    vlInterest:"",
    appleMarket:"",
    teslaMarket:"",
    xMarket:""
  });



const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:4003/main-details", formData);
        console.log(response.data);
    } catch(error) {
        console.log("Error updating details:");
    }
};


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
     <form action="" onSubmit={handleSubmit}>
     <table className="ad2">
       <thead className="ad2a">
         <tr>
           <th className="ad2b1">Update Details</th>
           <th className="ad2b1">Update Details</th>
         </tr>
       </thead>
       
       <tbody className='ad2b'>
       <tr>
       <td className='ad2c1'>
            <input type="text" placeholder="Change AccountNumber" name="accountNumber" value={formData.accountNumber}  onChange={handleChange}/>
          </td>
           <td className='ad2c1'>
            <input type="text" placeholder="Change AccountBalance" name="accountBalance" value={formData.accountBalance}  onChange={handleChange} />
          </td>
       </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Change SavingsAccount" name="sAccountBalance" value={formData.sAccountBalance}  onChange={handleChange}/>
          </td>
           
          <td className='ad2c1'>
            <input type="text" placeholder="Change LoanAccount" name="lAccountBalance" value={formData.lAccountBalanceAccountBalance}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Change SavingsInterest"  name="sInterestRates" value={formData.sInterestRates}  onChange={handleChange}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change LoanInterest" name="lInterestRates" value={formData.lInterestRates}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Change CertificateStartup" name="caStartup" value={formData.caStartup}  onChange={handleChange}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change CertificateInterest" name="caInterest" value={formData.caInterest}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
       <tr>
       <td className='ad2c1'>
            <input type="text" placeholder="Change HSAstartup" name="hsaStartup" value={formData.hsaStartup}  onChange={handleChange}/>
          </td>
           <td className='ad2c1'>
            <input type="text" placeholder="Change HSAinterest" name="hsaInterest" value={formData.hsaInterest}  onChange={handleChange}/>
          </td>
       </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Change IRAstartup"  name="iraStartup" value={formData.iraStartup}  onChange={handleChange}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change IRAinterest" name="iraInterest" value={formData.iraInterest}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Change CAbalance" name="ecaBalance" value={formData.ecaBalance}  onChange={handleChange}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change CAprofits" name="ecaProfits" value={formData.ecaProfits}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Change HSAbalance" name="hsaBalance" value={formData.hsaBalance}  onChange={handleChange}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change HSAprofits" name="hsaProfits" value={formData.hsaProfits}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
       <tr>
       <td className='ad2c1'>
            <input type="text" placeholder="Change IRAbalance" name="iraBalance" value={formData.iraBalance}  onChange={handleChange}/>
          </td>
           <td className='ad2c1'>
            <input type="text" placeholder="Change IRAprofits"  name="iraProfits" value={formData.iraProfits}  onChange={handleChange}/>
          </td>
       </tr>
       </tbody>
        <tbody className='ad2b'>
          <tr>
          <td className='ad2c1'>
            <input type="text" placeholder="Change PLstartup" name="plStartup" value={formData.plStartup}  onChange={handleChange}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change PLinterest" name="plInterest" value={formData.plInterest}  onChange={handleChange}/>
          </td>
          </tr>
        </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Change VLstartup" name="vlStartup" value={formData.vlStartup}  onChange={handleChange}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change VLprofits" name="vlInterest" value={formData.vlInterest}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Details ID"  name="_id" value={formData._id}  onChange={handleChange}/>
          </td> 
          <td className='ad2c1'>
          <input type="text" placeholder="Change appleMarket" name="appleMarket" value={formData.appleMarket}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <input type="text" placeholder="Change teslaMarket" name="teslaMarket" value={formData.teslaMarket}  onChange={handleChange}/>
          </td>
          <td className='ad2c1'>
            <input type="text" placeholder="Change xMarket" name="xMarket" value={formData.xMarket}  onChange={handleChange}/>
          </td>
        </tr>
       </tbody>
       <tbody className='ad2b'>
        <tr>
        <td className='ad2c1'>
            <button type="submit">Update</button>
          </td>
        </tr>
       </tbody>
     </table>
       </form>
   </div>
  )
}
