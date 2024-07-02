import React from "react";
import Nava from "./Nava";

export default function Adchangep() {
  return (
    <div className="c">
     <Nava />
      <form className="cp">
        <div className="cp1">Change Password</div>
        <input type="text" placeholder="Current Password" required  className="cp2"/>
        <div>dfd</div>
        <input type="text" placeholder="Choose New Password" required  className="cp3"/>
        <div>dfd</div>
        <input type="text" placeholder="Confirm New Password" required className="cp3"/>
        <div>
          dfd
        </div>
        <button type="submit"  className="cp4">Submit</button>
      </form>
    </div>
  );
}
