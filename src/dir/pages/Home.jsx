import React from "react";
import logo from "../components/IMG_E1332-min.png";
import olly from "../components/olly.jpg";
import ill from "../components/1stillustration.svg";
import { FaArrowRight } from "react-icons/fa6";
import payon from "../components/payonline.svg";
import cert from "../components/certacct.svg";
import mm from "../components/mmacct.svg";
import health from "../components/healthacct.svg";
import retire from "../components/retireacct.svg";
import faq from "../components/faq.webp";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { FaQrcode } from "react-icons/fa6";
import "./Style.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Nav from "./Nav";
import Slideshow from "./Slideshow";

export default function Home() {
  const navRef = useRef();


  const showNavBar = ()=>{
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <>
    <Nav />
      <header>
        <div className="head">
          <h1>CERTIFICATE ACCOUNT</h1>
          <h2>
            SAVE SMARTER, SAVE BETTER,
            <br />
            SAVE BIGGER
          </h2>
          <Link to="/open-an-account" className="head1">
            Open a Certificate
          </Link>
        </div>
      </header>
      <article>
        <div className="artt">
          <div className="art1">
            Win easy, set the bar high, hit your targets
          </div>
          <div className="art2">Certificates accounts are...</div>
          
          <div className="art4">
            <img src={olly} alt="" className="art4a" />
            <div className="art4b">
              <div className="art4b1"> Make it your own</div>
              <div className="art4b2">
                Choose from varieties of options featuring terms between <br />{" "}
                1 month–5 years. No other savings account offers this kind{" "}
                <br /> of flexibility.
              </div>
              <Link to="/open-an-account" className="art4b3">
                Open an account
              </Link>
            </div>
          </div>
        </div>
      </article>
      <aside>
        <div className="as1">Become a Member</div>
        <div className="as2">
          Become part of the Heritage Financial Credit Union financial family
          and enjoy all the
        </div>
        <div className="as3">
          benefits of Heritage Financial Credit Union. Contact our support
          718-599-5039
        </div>
        <img src={ill} alt="" className="ill" />
        <div className="as4">Welcome to the family!</div>
        <div className="as2">
          Reach your financial goals, with our advanced technology and superior
          customer service.
        </div>
        <div className="as5">
          Become a member, simply follow the steps outlined below:
        </div>
        <div className="as6">
          <div className="as6a">1</div>
          <div className="as6b">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
          </div>
          <div className="as6a">2</div>
          <div className="as6b">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </div>
          <div className="as6a">3</div>
        </div>
        <div className="as7">
          <div className="as7a">Open account</div>
          <div className="as7b">Sign in</div>
          <div className="as7c">Transact</div>
        </div>
        <div className="as77">
        <div className="as77a">Open account</div>
        <div className="as88a">Open an account to become a member</div>
        <Link to="/open-an-account" className="as99a">
            Go Now <FaArrowRight className="as99ab" />
          </Link>
        </div>
        <div className="as8">
          <span className="as8a">Open an account to become a member</span>
          <span className="as8b">Sign in with credentials to get access</span>
          <span className="as8c">
            Start transaction on your account seamlessly
          </span>
        </div>
        <div className="as88">
        <div className="as77b">Sign in</div>
        <div className="as88b">Sign in with credentials to get access</div>
        <span className="as99b">Ensure you use your correct details</span>
        </div>

        <div className="as9">
          <Link to="/open-an-account" className="as9a">
            Go Now <FaArrowRight className="as9ab" />
          </Link>
          <span className="as9b">Ensure you use your correct details</span>
          <span className="as9c">Transact from any part of the world</span>
        </div>
        <div className="as99">
        <div className="as77c">Transact</div>
        <div className="as88c">
            Start transaction on your account seamlessly
          </div>
          <div className="as99c">Transact from any part of the world</div>
        </div>
        <img src={payon} alt="" className="payon" />
        <div className="as11">Related Products</div>
        <div className="as12">
          <img src={cert} alt="" className="as12a" />
          <img src={mm} alt="" className="as12b" />
          <img src={health} alt="" className="as12c" />
          <img src={retire} alt="" className="as12d" />
        </div>
        <div className="as122">
        <img src={cert} alt="" className="as122a" />
        <div className="as133a">Certificate</div>
        <div className="as144a">accounts</div>
        </div>
        <div className="as13">
          <span className="as13a">Certificate</span>
          <span className="as13b">Money market</span>
          <span className="as13c">Health savings</span>
          <span className="as13d">Individual</span>
        </div>
        <div className="as133">
        <img src={mm} alt="" className="as122b" />
        <div className="as133b">Money market</div>
        <div className="as144b">accounts</div>
        </div>
        <div className="as14">
          <span className="as14a">accounts</span>
          <span className="as14b">accounts</span>
          <span className="as14c">accounts</span>
          <span className="as14d">retirement</span>
        </div>
        <div className="as144">
        <img src={health} alt="" className="as122c" />
        <div className="as133c">Health savings</div>
        <div className="as144c">accounts</div>
        <div className="as155a">(HSAs)</div>
        </div>
        <div className="as15">
          <span className="as15a">(HSAs)</span>
          <span className="as15b">accounts (IRAs)</span>
        </div>
        <div className="as155">
        <img src={retire} alt="" className="as122d" />
        <div className="as133d">Individual</div>
        <div className="as144d">retirement</div>
        <div className="as145b">accounts (IRAs)</div>
        </div>
      </aside>
      <p className="ph">
        <div className="phh">
          <div className="ph1">
            <div className="ph1a">What our members</div>
            <div className="ph1b">are saying</div>
            <div className="ph1c">
              Heritage Financial serves hundreds of Individuas and
            </div>
            <div className="ph1d">
              families just like you. Look at what they have to say
            </div>
          </div>
          <div className="ph2">
            <BiSolidQuoteLeft className="ph2a" />
            <Slideshow />
  
          </div>
        </div>
      </p>
      <p className="pp">
        <div className="pp1">
          <div className="pp1a">
            <div className="pp1a1">What our members are</div>
            <div className="pp1a2">asking</div>
            <div className="pp1a3">
              Managing your finances can feel overwhelming. Don’t
            </div>
            <div className="pp1a4">worry, we’re here to help.</div>
          </div>
          <img src={faq} alt="" className="pp1b" />
        </div>
        <div className="ppp">
          <div className="ppp1">
            <div className="ppp1a">
              <div className="ppp1a1">How can i afford a </div>
              <div className="ppp1a1">home in today's</div>
              <div className="ppp1a1">market?</div>
            </div>
            <IoIosAddCircle className="ppp1a2" />
          </div>
          <div className="ppp2">
            <div className="ppp2a">
              <div className="ppp2a1">How wiil i be able to </div>
              <div className="ppp2a1">retire?</div>
            </div>
            <IoIosAddCircle className="ppp1a2" />
          </div>
        </div>
      </p>
      <div className="llp">
        <div className="lp">
          <div className="lp1">
          How cam i afford a home in today's market?
          </div>
          <div className="lpp1">
          Start saving early and aggressively for a <br />
          down payment. Call us to know more.
          </div>
          <span className="lp2">
          <FaQrcode />
          </span>
        </div>
        <div className="llpp">
          <div className="lp1">
          How will i be able to retire?
          </div>
          <div className="lpp1">
          The earlier you start saving for retirement, <br />
          the more time your investments have to grow.
          </div>
          <span className="lp2">
          <FaQrcode />
          </span>
        </div>
        <div className="llpp">
          <div className="lp1">
          Who can i trust to take care of my money?  
          </div>
          <div className="lpp1">
          Heritage Financial aligns with your goals and <br />
          values. Contact us for more information.
          </div>
          <span className="lp2">
          <FaQrcode />
          </span>
        </div>
        <div className="llpp">
          <div className="lp1">
          How can i stay afloat in today's economy?  
          </div>
          <div className="lpp1">
          Staying afloat in today's economy requires a <br />
          combination of proactive financial management and <br />
          adaptability.
          </div>
          <span className="lp2">
          <FaQrcode />
          </span>
        </div>
        </div>
      <div className="pppp">
        <div className="ppp1">
          <div className="ppp11a">
            <div className="ppp1a1">Who can i trust to </div>
            <div className="ppp1a1">take care of my</div>
            <div className="ppp1a1">money?</div>
          </div>
          <IoIosAddCircle className="ppp1a2" />
        </div>
        <div className="ppp2">
          <div className="ppp2a">
            <div className="ppp2a1">How can i stay afloat</div>
            <div className="ppp2a1">in today's economy?</div>
          </div>
          <IoIosAddCircle className="ppp1a2" />
        </div>
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
    </>
  );
}
