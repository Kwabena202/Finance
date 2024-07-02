import React from 'react'
import logo from "../components/IMG_E1332-min.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navd from './Navd';

export default function Loanhis() {
  return (
    <div className='c'>
        <Navd />
      <p className='ht'>
        <div className='ht1'>Transactions</div>
        <div className='ht22'>
        <div className='ht2'>
            <Link to='/history' className='htt'>All Transactions</Link>
            <Link to='/savings-history' className='htt'>Savings</Link>
            <Link to='/loan-history' className='htt'>Loan</Link>
        </div>
        <div className='ht3l'>p</div>
        </div>
        <div className='ht4'>
            <div>
            <GoCalendar />
            </div>   
            17 Jun-30 Jun 2024
            <div>
            <FaChevronDown />
            </div>        
        </div>
        <div className='ht5'>No transaction yet</div>
      </p>
    </div>
  )
}
