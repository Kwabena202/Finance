import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../components/IMG_E1332-min.png";
import React from 'react'

export default function Navd() {
    const [showResponsiveNav, setShowResponsiveNav] = useState(false);

    return (
      <nav className="c1">
        <div className="logo">
       <img src={logo} alt="" className='c1a1'/>
       <div className='logo2'>
        <div className='logo2a'>Heritage Financial</div>
        <div className='logo2b'>Credit Union</div>
       </div>
      </div>
        {showResponsiveNav ? (
          // Responsive Nav
          <ul className="navd-links-responsive">
            <li><Link to='/my-account/:id' className="cnn1">Dasboard</Link></li>
            <li><Link to='/savings-account' className="cnn2">Savings</Link></li>
            <li><Link to='/loan-account' className="cnn3">Loans</Link></li>
            <li><Link to='/history' className="cnn4">History</Link></li>
            <li><Link to='/settings' className="cnn5">Settings</Link></li>
            <li><Link to='/profile' className="cnn6">Profile</Link></li>
          </ul>
        ) : (
          // Normal Nav
          <ul className="nav-links">
            <li><Link to='/my-account/:id' className="cn1">Dasboard</Link></li>
            <li><Link to='/savings-account' className="cn2">Savings</Link></li>
            <li><Link to='/loan-account' className="cn3">Loans</Link></li>
            <li><Link to='/history' className="cn4">History</Link></li>
            <Link to='/settings' className="c1c11">
          <IoSettingsOutline className="c1c1" />
        </Link>
        <Link to="/profile" className="c1c">
          <RiAccountCircleFill className="c1c2" />
        </Link>
          </ul>
        )}
        <div className="burger" onClick={() => setShowResponsiveNav(!showResponsiveNav)}>
      <FaBars color='white'/>
      </div>
      </nav>
    );
  }
