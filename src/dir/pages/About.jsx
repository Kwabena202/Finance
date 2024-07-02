import React from "react";
import logo from "../components/IMG_E1332-min.png";
import about from "../components/about.jpg";
import history from "../components/history.jpg";
import about2 from "../components/about2.jpg";
import charity from "../components/charity2.jpg";
import working from "../components/working.jpg";
import { Link } from "react-router-dom";
import "./Style.css";
import Nav from "./Nav";

export default function About() {
  return (
    <div className="about">
      <Nav />
      <header className="abh">
        <div className="abh1">
          <div className="abh1a">ABOUT US</div>
          <div className="abh1b">
            Putting <br /> members first <br /> since 2014
          </div>
          <div className="abh1c">Strength in members </div>
          <Link to="/open-an-account" className="abh1d">
            Open an account
          </Link>
        </div>
        <img src={about} alt="" className="abhimg" />
      </header>
      <div>
        <div className="ab2a">
          <div className="ab2a1">
            {" "}
            You know where you’re going—we just help you
          </div>
          <div className="ab2a2">get there.</div>
        </div>
        <div className="ab2b">
          <img src={about2} alt="" className="ab2b1" />
          <div className="ab2b2">
            <div>Heritage Financial is one of the largest digital credit</div>
            <div className="ab2b2b">
              unions in the U.S., serving more than 750,000 members{" "}
            </div>
            <div className="ab2b2b">
              across the country and around the world. We are a{" "}
            </div>
            <div className="ab2b2b">
              member-owned cooperative, returning profits to our
            </div>
            <div className="ab2b2b">
              {" "}
              members by offering competitive rates and lower fees.
            </div>
            <div className="ab2b2c">
              Members have access to online financial services, reach
            </div>
            <div className="ab2b2b">
              your goals faster with automatic transfers to your savings
            </div>
            <div className="ab2b2b">account.</div>
          </div>
        </div>
      </div>
      <div className="ab3">
        <div className="ab3a">Our story</div>
        <div className="ab3d">
          <img src={history} alt="" className="ab3d1" />
          <div className="ab3d2">
            <div className="ab3d2a">Strength in community</div>
            <div className="ab3d2b">
              Founded in 2010, our digital credit union has revolutionized
              banking by
            </div>
            <div className="ab3d2c">
              merging cutting-edge technology with financial services. With a
              mission
            </div>
            <div className="ab3d2c">
              to provide accessible and convenient banking solution, we have
              quickly
            </div>
            <div className="ab3d2c">
              become a trusted institution for Individual and businesses alike,
              offering
            </div>
            <div className="ab3d2c">
              a wide range of digital banking products and services.
            </div>
            <div className="ab3d2b">
              Since our inception, we have focused on innovation and
              customer-centricity,{" "}
            </div>
            <div className="ab3d2c">
              continuosly adapting to meet the evolving needs of our members.
              Through
            </div>
            <div className="ab3d2c">
              user-friendly interfaces and secure online platforms, we offer
              seamless
            </div>
            <div className="ab3d2c">
              banking experience, empowering our members to manage their
              finances anytime,
            </div>
            <div className="ab3d2c">anywhere.</div>
            <div className="ab3d2b">
              Over the past decade, our digital credit union has grown
              exponentially,
            </div>
            <div className="ab3d2c">
              expanding our reach and impact across communities. With a
              commitment to
            </div>
            <div className="ab3d2c">
              financial inclusion and technological advancement, we continue to
              shape
            </div>
            <div className="ab3d2c">
              the future of banking, driving innovation and excellence in the
              digital age.
            </div>
          </div>
        </div>
      </div>
      <div className="ab4">
        <img src={charity} alt="" className="ab4a" />
        <div className="ab4b">
          <div className="ab4b1">People helping people</div>
          <div className="ab4b2">We know that healthy communities benefit</div>
          <div className="ab4b3">
            everyone. That’s why we support organizations
          </div>
          <div className="ab4b3">
            dedicated to improving the lives of people in our
          </div>
          <div className="ab4b3">communities.</div>
          <div className="ab4b2">
            For nearly 20 years, the Heritage Financial Credit Union
          </div>
          <div className="ab4b3">
            Foundation has supported 501(c)(3) charitable
          </div>
          <div className="ab4b3">
            organizations that provide needs-based services to
          </div>
          <div className="ab4b3">
            children, veterans, and active-duty members of the
          </div>
          <div className="ab4b33">military and their families.</div>
          <Link to="/open-an-account" className="ab4b4">
            Become a member
          </Link>
        </div>
      </div>
      <div className="ab5">
        <div className="ab5a">
          <div className="ab4b1">Working together</div>
          <div className="ab4b2">
            Build a career with an organization that cares
          </div>
          <div className="ab4b3">
            about their employees and the community they
          </div>
          <div className="ab4b3">
            live in. We offer competitive benefits, promote from
          </div>
          <div className="ab4b3">
            within, and believe in promoting a healthy work/life
          </div>
          <div className="ab4b3">balance.</div>
          <div className="ab4b2">
            Heritage Financial prides itself in developing a knowledgeable
          </div>
          <div className="ab4b3">
            and professional employee workforce built through
          </div>
          <div className="ab4b3">
            hands-on experience and training offered by our
          </div>
          <div className="ab4b3">
            Heritage University. Expand your skills sets and
          </div>
          <div className="ab4b33">
            pursue professional development with Global.
          </div>
          <Link to="/services" className="ab4b4">
            Learn More
          </Link>
        </div>
        <img src={working} alt="" className="ab5b" />
      </div>
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
