import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Tsucess() {
  return (
    <div className='c'> 
    <div className='ts'>
     <RiVerifiedBadgeFill className='ts1'/>
     <div className='ts2'>
        <span className='ts2a'>Transaction Sucessful</span>
     </div>
     <Link to='/my-account/:id' className='ts3'>Go back home</Link>
     </div>
    </div>
  )
}
