import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import logo from "../components/IMG_E1332-min.png";
import services from "../components/services.jpg";
import services2 from "../components/services2.jpg";
import services3 from "../components/services3.jpg";
import { FaArrowRight } from "react-icons/fa";
import service from "../components/services.svg";
import edu from "../components/edu.svg";
import smallr from "../components/smallr.svg";
import retire from "../components/retire.svg";
import team from "../components/team-line.svg";
import Nav from "./Nav";

export default function Services() {
  return (
    <div className="about">
      <Nav />
      <header className="acch">
        <img src={services} alt="" className="achimg" />
        <div className="sh1">
          <div className="nav2">
            <div className="sh2a">
              HERITAGE FINANCIAL <span className="sh2aa">|</span>{" "}
            </div>
          </div>
          <div>
            <div className="sh3">
              Retirement & <br />
              Investment services
            </div>
          </div>
          <div className="ach1a">FINANCIAL PLANNING</div>
          <div className="ach1b">
            Work toward the
            <br />
            future you want
          </div>
          <div className="ach1c">Our team collaborates with you to</div>
          <div className="ach1c">create a plan based on your needs and</div>
          <div className="ach1d">goals</div>

          <Link to="/open-an-account" className="abh1d">
            Become a member
          </Link>
        </div>
      </header>
      <div className="s3">
        <div className="s3a">Our team puts you first</div>
        <div className="s3b">
          <div className="s3b11">
            <img src={services2} alt="" className="s3b1" />
          </div>
          <div className="s3b2">
            <div className="s3b2a">
              Our financial professionals offer personalized guidance that
            </div>
            <div className="s3b2b">
              supports your goals. We use competitive technology to
            </div>
            <div className="s3b2b">
              develop your individualized plan, analyze opportunities, and
            </div>
            <div className="s3b2b">evaluate results.</div>
            <div className="s3b2c">
              Our VA loan specialists are ready to help you one-on-one,
            </div>
            <div className="s3b2b">every step of the way.</div>
          </div>
        </div>
        <div className="s3c">
          <div className="s3c1">
            <div className="s3c11">
              <div className="s3c1a">Contact a Financial</div>
              <div className="s3c1b">
                Professional <FaArrowRight className="s3c1bb" />
              </div>
            </div>
            <div className="s3c1c">
              Call us at <span className="s3c1cc">718-599-5039</span>
            </div>
          </div>
        </div>
      </div>
      <p className="s4">
        <div className="s44">
          Financial planning for all aspects of your life
        </div>
        <div className="ac3">
          <div className="ac3a">
            <div className="ac2aa">
              <img src={service} alt="" className="ac2a1" />
              <div className="ac2b2">
                Investment
                <br />
                services
              </div>
            </div>
            <div className="ac2a3">
              <div className="ac2a3b">Our financial professionals can </div>
              <div className="ac2a3b">create a personalized investment</div>
              <div className="ac2a3b">plan based on your goals to help</div>
              <div className="ac2a3b">make your money work for you.</div>
            </div>
          </div>
          <div className="ac3aa">
            <div className="ac2aa">
              <img src={retire} alt="" className="ac2a1" />
              <div className="ac2b2">
                Retirement <br />
                planning
              </div>
            </div>
            <div className="ac2a3">
              <div className="ac2a3b">Whether you’re just starting out or</div>
              <div className="ac2a3b">getting ready to retire, we can</div>
              <div className="ac2a3b">help you plan for a confident</div>
              <div className="ac2a3b">future. Our financial</div>
              <div className="ac2a3b">professionals put you first.</div>
            </div>
          </div>
          <div className="ac3ab">
            <div className="ac2aa">
              <img src={smallr} alt="" className="ac2a1" />
              <div className="ac2b2">
                Small business <br />
                retirement plans
              </div>
            </div>
            <div className="ac2a3">
              <div className="ac2a3b">As a business owner, you must</div>
              <div className="ac2a3b">save your own retirement and</div>
              <div className="ac2a3b">attract talented employees</div>
              <div className="ac2a3b">by setting up a plan for your</div>
              <div className="ac2a3b">organization.</div>
            </div>
          </div>
        </div>

        <div className="s4a">
          <div className="ac2aa">
            <img src={edu} alt="" className="ac2a1" />
            <div className="ac4b2">
              Education Savings <br /> Accounts
            </div>
          </div>
          <div className="ac2a3">
            <div className="ac2a3b">A 529 plan or Coverdell </div>
            <div className="ac2a3b">Education Savings Account make </div>
            <div className="ac2a3b">it easy for you and other family</div>
            <div className="ac2a3b">members to save for your child's</div>
            <div className="ac2a3b">education.</div>
          </div>
        </div>
      </p>
      <p className="sbh">
        <div className="s5">
          <img src={team} alt="" className="s5a" />
          <div className="s5b">Here when you need us</div>
          <div className="sch1c">
            Our financial professionals are here to help.
          </div>
          <div className="sch1c">Get in touch with a member of our team </div>
          <div className="sch1d">
            for a complimentary, no-obligation consultation.
          </div>

          <Link to="/login" className="lbh1d">
            Already a Member
          </Link>
        </div>
        <img src={services3} alt="" className="abhimg" />
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
