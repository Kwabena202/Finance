import React from 'react'
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import logo from "../components/IMG_E1332-min.png";





export default function Nav() {

  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
       <img src={logo} alt="" className='logo1'/>
       <div className='logo2'>
        <div className='logo2a'>Heritage Financial</div>
        <div className='logo2b'>Credit Union</div>
       </div>
      </div>
      {showResponsiveNav ? (
        // Responsive Nav
        <ul className="nav-links-responsive">
          <li><Link to='/home' className='nn'>Home</Link></li>
          <li><Link to='/about' className='nn1'>About</Link></li>
          <li><Link to='/accounts'  className='nn2'>Accounts</Link></li>
          <li><Link to='/loans' className='nn3'>Loans</Link></li>
          <li><Link to='/services' className='nn4'>Services</Link></li>
          <li><Link to='/open-an-account' className='nn5'>Open An Account</Link></li>
          <li><Link to='/login' className='nn6'>Login</Link></li>
        </ul>
      ) : (
        // Normal Nav
        <ul className="nav-links">
          <li><Link to='/home' className='n1'>Home</Link></li>
          <li><Link to='/about' className='n2'>About</Link></li>
          <li><Link to='/accounts' className='n3'>Account</Link></li>
          <li><Link to='/loans'  className='n4'>Loans</Link></li>
          <li><Link to='/services'  className='n5'>Services</Link></li>
          <li><Link to='/login'  className='n6'>Login</Link></li>
          <li><Link to='/open-an-account'  className='n7'>Open An Account</Link></li>

        </ul>
      )}
      <div className="burger" onClick={() => setShowResponsiveNav(!showResponsiveNav)}>
      <FaBars color='white'/>
      </div>
    </nav>
  )
}
