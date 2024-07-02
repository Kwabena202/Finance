import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../components/IMG_E1332-min.png";
import React from 'react'

export default function Nava() {
    const [showResponsiveNav, setShowResponsiveNav] = useState(false);

    return (
      <nav className="c1">
        <div className="logo">
       <img src={logo} alt="" className='c1a1'/>
       <div className='logo2'>
        <div className='logo2aa'>Heritage Financial</div>
        <div className='logo2bb'>Credit Union</div>
       </div>
      </div>
        {showResponsiveNav ? (
          // Responsive Nav
          <ul className="navd-links-responsive">
            <li><Link to='/admin/:id' className="cnn1">Users</Link></li>
            <li><Link to='/users2' className="cnn1">Users2</Link></li>
            <li><Link to='/users3' className="cnn1">Users3</Link></li>
            <li><Link to='/view-details' className="cnn2">Details1</Link></li>
            <li><Link to='/details2' className="cnn2">Details2</Link></li>
            <li><Link to='/details3' className="cnn2">Details3</Link></li>
            <li><Link to='/details4' className="cnn2">Details4</Link></li>
            <li><Link to='/details5' className="cnn2">Details5</Link></li>
            <li><Link to='/view-more-details1' className="cnn3">Details6</Link></li>
            <li><Link to='/details6' className="cnn2">Details7</Link></li>
            <li><Link to='/details7' className="cnn2">Details8</Link></li>
            <li><Link to='/view-more-details2' className="cnn4">Details9</Link></li>
            <li><Link to='/view-more-details2' className="cnn4">View More</Link></li>
            <li><Link to='/update-details' className="cnn5">Update Details</Link></li>
            <li><Link to='/update-users' className="cnn5">Update Users</Link></li>
            <li><Link to='/deposit-admin' className="cnn5">Deposit</Link></li>
          </ul>
        ) : (
          // Normal NavaQ
          <ul className="nav-links">
            <li><Link to='/admin/:id' className="cn1">Users</Link></li>
            <li><Link to='/users2' className="cn1">Users2</Link></li>
            <li><Link to='/users3' className="cn1">Users3</Link></li>
            <li><Link to='/view-details' className="cn2">Details1</Link></li>
            <li><Link to='/details2' className="cn2">Details2</Link></li>
            <li><Link to='/details3' className="cn2">Details3</Link></li>
            <li><Link to='/details4' className="cn2">Details4</Link></li>
            <li><Link to='/details5' className="cn2">Details5</Link></li>
            <li><Link to='/view-more-details1' className="cn3">Details6</Link></li>
            <li><Link to='/details6' className="cn2">Details7</Link></li>
            <li><Link to='/details7' className="cn2">Details8</Link></li>
            <li><Link to='/view-more-details2' className="cn4">Details9</Link></li>
            <li><Link to='/update-details' className="cn4">Update Details</Link></li>
            <li><Link to='/update-users' className="cn4">Update Users</Link></li>
            <li><Link to='/deposit-admin' className="cn4">Deposit </Link></li>
          </ul>
        )}
        <div className="burger" onClick={() => setShowResponsiveNav(!showResponsiveNav)}>
      <FaBars color='white'/>
      </div>
      </nav>
    );
  }