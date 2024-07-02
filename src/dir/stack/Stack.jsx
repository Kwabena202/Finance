import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Customer from "../pages/Customer";
import Admin from "../pages/Admin";
import About from "../pages/About";
import Accounts from "../pages/Accounts";
import Loans from "../pages/Loans";
import Services from "../pages/Services";
import Savings from "../pages/Savings";
import Loansd from "../pages/Loansd";
import History from "../pages/History";
import Savehis from "../pages/Savehis";
import Loanhis from "../pages/Loanhis";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Changeu from "../pages/Changeu";
import Changepin from "../pages/Changepin";
import Withdraw from "../pages/Withdraw";
import Deposit from "../pages/Deposit";
import Uab from "../pages/Uab";
import Ed from "../pages/Ed";
import Um from "../pages/Um";
import Fa from "../pages/Fa";
import Adsettings from "../pages/Adsettings";
import Adchangeu from "../pages/Adchangeu";
import Adchangep from "../pages/Adchangep";
import Adminlogin from "../pages/Adminlogin";
import Tsucess from "../pages/Tsucess";
import Ud from "../pages/Ud";
import Admindeposit from "../pages/Admindeposit";
import Users2 from "../pages/Users2";
import Users3 from "../pages/Users3";
import Details2 from "../pages/Details2";
import Details3 from "../pages/Details3";
import Details4 from "../pages/Details4";
import Details5 from "../pages/Details5";
import Details6 from "../pages/Details6";
import Details7 from "../pages/Details7";

export default function Stack() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/open-an-account" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/My-account/:id" element={<Customer />} />
        <Route path="/savings-account" element={<Savings />} />
        <Route path="/loan-account" element={<Loansd />} />
        <Route path="/admin/:id" element={<Admin />} />
        <Route path="/adlogin" element={<Adminlogin />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin-settings-change-password" element={<Adchangep />} />
        <Route path="/settings-change-username" element={<Changeu />} />
        <Route path="/admin-settings-change-username" element={<Adchangeu />} />
        <Route path="/settings-change-pin" element={<Changepin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/sucessful" element={<Tsucess />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/details2" element={<Details2 />} />
        <Route path="/details3" element={<Details3 />} />
        <Route path="/details4" element={<Details4 />} />
        <Route path="/details5" element={<Details5 />} />
        <Route path="/details6" element={<Details6 />} />
        <Route path="/details7" element={<Details7 />} />
        <Route path="/deposit-admin" element={<Admindeposit />} />
        <Route path="/update-users" element={<Fa />} />
        <Route path="/update-details" element={<Ud />} />
        <Route path="/view-more-details2" element={<Um />} />
        <Route path="/view-more-details1" element={<Ed />} />
        <Route path="/admin-settings" element={<Adsettings />} />
        <Route path="/view-details" element={<Uab />} />
        <Route path="/credit-transactions" element={<Savehis />} />
        <Route path="/loan-history" element={<Loanhis />} />
        <Route path="/users2" element={<Users2 />} />
        <Route path="/users3" element={<Users3 />} />
        <Route path="https://www.tradingview.com/markets/#indices" />
      </Routes>
    </div>
  );
}
