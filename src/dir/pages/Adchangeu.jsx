import React from "react";
import Nava from "./Nava";

export default function Adchangeu() {
  return (
    <div className="c">
      <Nava />
      <form className="cp">
        <div className="cp1">Change Username</div>
        <div className='cu'>Admin</div>
        <input type="text" placeholder="Choose New Username" required  className="cp3"/>
        <div>dfd</div>
        <button type="submit"  className="cp4">Submit</button>
      </form>
    </div>
  );
}
