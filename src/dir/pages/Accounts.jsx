import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import logo from "../components/IMG_E1332-min.png";
import coupleh from "../components/coupleh.jpg";
import ill from "../components/1stillustration.svg";
import cert2 from "../components/cert2.svg";
import health from "../components/health.svg";
import couplea from "../components/couplea.jpg";
import retire from "../components/retire.svg";
import acl from "../components/acl.jpg";
import { GoDotFill } from "react-icons/go";
import Nav from "./Nav";

export default function Accounts() {
  return (
    <div className="about">
      <Nav />
      <header className="abbh">
        <div className="ach1">
          <div className="ach1a">ACCOUNTS</div>
          <div className="ach1b">
            Built with you <br />
            in mind
          </div>
          <div className="ach1c">We’ve lowered fees and streamlined</div>
          <div className="ach1c">accounts so your financial goals are</div>
          <div className="ach1d">easier to reach</div>

          <Link to="/open-an-account" className="abbh1d">
            Open an account
          </Link>
        </div>
        <img src={couplea} alt="" className="abhimg" />
      </header>
      <div className="ac1">Accounts for every need</div>
      <div className="ac2">
        <div className="ac2a">
          <div className="ac2aa">
            <img src={ill} alt="" className="ac2a1" />
            <div className="ac2a2">Savings accounts</div>
          </div>
          <div className="ac2a3">
            <div className="ac2a3b">No maintenance fee. No</div>
            <div className="ac2a3b">minimum balance. A</div>
            <div className="ac2a3b">straigthforward savings account</div>
            <div className="ac2a3b">that earns dividends on balances</div>
            <div className="ac2a3b">over $50. Open up to ten savings</div>
            <div className="ac2a3b">per account</div>
          </div>
        </div>
        <div className="ac2a">
          <div className="ac2aa">
            <img src={cert2} alt="" className="ac2a1" />
            <div className="ac2b2">
              Certificate <br />
              accounts
            </div>
          </div>
          <div className="ac2a3">
            <div className="ac2a3b">Choose from a range of</div>
            <div className="ac2a3b">certificate terms, with longer</div>
            <div className="ac2a3b">terms earning higher rates of</div>
            <div className="ac2a3b">return on your investment.</div>
            <div className="ac2a3b">Insured for up to $250,000,</div>
            <div className="ac2a3b">certificates can be a low-risk way</div>
            <div className="ac2a3b">to grow your money.</div>
          </div>
        </div>
        <div className="ac2a">
          <div className="ac2aa">
            <img src={health} alt="" className="ac2a1" />
            <div className="ac2b2">
              Health savings <br />
              accounts (HSAs)
            </div>
          </div>
          <div className="ac2a3">
            <div className="ac2a3b">Save and pay for the out-of-</div>
            <div className="ac2a3b"> pocket medical costs your high</div>
            <div className="ac2a3b">Deductible Health plan might</div>
            <div className="ac2a3b">leave you-and save on taxes</div>
            <div className="ac2a3b">while you're at it.</div>
          </div>
        </div>
      </div>
      <div className="ac3">
        <div className="ac2a">
          <div className="ac2aa">
            <img src={retire} alt="" className="ac2a1" />
            <div className="ac4b2">
              Individual <br />
              retirement
              <br />
              accounts
            </div>
          </div>
          <div className="ac2a3">
            <div className="ac2a3b">Grow your retirement fund with</div>
            <div className="ac2a3b">great tax advantages-while also</div>
            <div className="ac2a3b">diversifying your investments</div>
            <div className="ac2a3b">portfolio. Choose from Traditional</div>
            <div className="ac2a3b">and Roth IRAs or simplified</div>
            <div className="ac2a3b">Employee Pensions (SEPs)</div>
          </div>
        </div>
      </div>
      <p className="ac5">
        <div className="ac5a">We make it easy to manage your money</div>
        <div className="ac5b">
          <img src={coupleh} alt="" className="ac5b1" />
          <div className="ac5b2">
            <div className="ac5b2a">
              <GoDotFill className="ac5b2a11" />
              <div className="ac5b2a22">
              ___Low fee overdraft protection available.___
              </div>
            </div>
            <div className="ac5b2a">
              <GoDotFill className="ac5b2a11" />
              <div className="ac5b2a22">
                _Access your account anytime online or with the Heritage
                Financial Credit Union Web page.
              </div>
            </div>
            <div className="ac5b2a">
              <GoDotFill className="ac5b2a11" />
              <div className="ac5b2a22">
                _Talk to a real person at the 24/7 Member Service Center.
              </div>
            </div>
            <div className="ac5b2a">
              <GoDotFill className="ac5b2a11" />
              <div className="ac5b2a22">
                _Reduce your risk of identity theft with eStatements you
                can view online.
              </div>
            </div>
            <Link to="/open-an-account" className="ac5bc">
              Open an account
            </Link>
          </div>
        </div>
      </p>
      <p className="ac6">
        <div className="ac6a">
          <div className="ac6a1">Early Payday</div>
          <div className="ac6a2">
            Members get access to direct deposit funds up to 3 days
          </div>
          <div className="ac6a3">
            earlier. You earned it—so you should be able to use it as soon
          </div>
          <div className="ac6a3">as possible.</div>
          <div className="ac6a4">Still need to set up direct deposit? </div>
          <div className="ac6a5">1. Sign in to your account online</div>
          <div className="ac6a5">2. Click the Account Services tab</div>
          <div className="ac6a5">3. Select ClickSWITCH to get started</div>
        </div>
        <img src={acl} alt="" className="ac6b" />
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
