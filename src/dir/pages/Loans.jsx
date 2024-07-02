import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import logo from "../components/IMG_E1332-min.png";
import loanh from "../components/loan1.jpg";
import loan from "../components/loans.svg";
import car from "../components/car.svg";
import loanb from "../components/loanb.jpg";
import { GoDotFill } from "react-icons/go";
import Nav from "./Nav";

export default function Loans() {
  return (
    <div className="about">
      <Nav />
      <header className="ach">
        <img src={loanh} alt="" className="achimg" />
        <div className="lh">
          <div className="ach1a">LOANS</div>
          <div className="ach1b">
            Financing for <br />
            the life you want
          </div>
          <div className="ach1c">From new cars to covering unexpected</div>
          <div className="ach1d">expenses, we’re here to help</div>

          <Link to="/login" className="abh1d">
            Apply now
          </Link>
        </div>
      </header>
      <div className="l2">Loans and lines of credit that work for you</div>
      <div className="l1">
        <div className="ac4a">
          <div className="ac2aa">
            <img src={car} alt="" className="ac2a1" />
            <div className="ac2a2">Vehichle loans</div>
          </div>
          <div className="ac2a3">
            <div className="ac2a3b">Loans for almost any kind of new</div>
            <div className="ac2a3b">or used vehicle, from cars and</div>
            <div className="ac2a3b">trucks to boats, RVs, and</div>
            <div className="ac2a3b">snowmachines.</div>
          </div>
        </div>
        <div className="ac2a">
          <div className="ac2aa">
            <img src={loan} alt="" className="ac2a1" />
            <div className="l2b2">
              Personal loans & <br />
              lines of credit
            </div>
          </div>
          <div className="ac2a3">
            <div className="ac2a3b">Finance a major purchase,</div>
            <div className="ac2a3b">consolidate your debts, or get</div>
            <div className="ac2a3b">extra cash for urgent expenses.</div>
          </div>
        </div>
      </div>
      <p className="l3">
        <div className="l3a">Competitive rates and fewer fees</div>
        <div className="l3b">
          <img src={loanb} alt="" className="l3b1" />
          <div className="l3b2">
            <div className="l3b2a">
              We offer both secured and unsecured personal loans and
            </div>
            <div className="l3b2b">
              lines of credit, as well as vehicle loans for cars, trucks,
            </div>
            <div className="l3b2b">
              motorcycles, off-road vehicles, RVs, campers, boats,
            </div>
            <div className="l3b2b">airplanes, and more.</div>
            <div className="l3b2bb">
              All of our vehicle loans, personal loans, and personal lines of
            </div>
            <div className="l3b2b">credit feature:</div>
            <div className="l3b2c">
              <GoDotFill className="l3b2c11" />
              <div className="l3b2c22">Affordable, competitive rates</div>
            </div>
            <div className="l3b2c">
              <GoDotFill className="l3b2c1" />
              <div className="l3b2c2">No application fees</div>
            </div>
            <div className="l3b2c">
              <GoDotFill className="l3b2c1" />
              <div className="l3b2c2">
                An easy application process and a fast decision
              </div>
            </div>
            <div className="l3b2bb">
              Because we're a member-owned, not-for-profit credit
            </div>
            <div className="l3b2b">
              union, we can offer better interest rates and lower fees than
            </div>
            <div className="l3b2bbb">many other financial institutions. </div>
            <Link to="/login" className="lbh1d">
              Apply now
            </Link>
          </div>
        </div>
      </p>
      <footer>
        <div className="f1">
          <img src={logo} alt="" className="logo1" />
          <div className="logo2">
            <div className="logo2a">Heritage Financial</div>
            <div className="logo2b">Credit Union</div>
          </div>
          <div className="f3">
            <Link to="/loans" className="f3a">
              Loans
            </Link>
            <Link to="accounts" className="f3a">
              Accounts
            </Link>
            <Link to="/services" className="f3a">
              Services
            </Link>
            <Link to="/about" className="f3a">
              About
            </Link>
          </div>
        </div>
        <div className="f11">p</div>
        <div className="f12">
          ©2024 Heritage Financial Credit Union. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
