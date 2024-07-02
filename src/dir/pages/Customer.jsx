import React, {useState, useEffect} from "react";
import logo from "../components/IMG_E1332-min.png";
import { CgLogOut } from "react-icons/cg";
import { PiHandWithdrawFill } from "react-icons/pi";
import { PiHandDepositFill } from "react-icons/pi";
import { BiSolidUserPin } from "react-icons/bi";
import { TbCirclesFilled } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaCarOn } from "react-icons/fa6";
import { MdPersonalInjury } from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navd from "./Navd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Customer() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [details, setDetails] = useState();


  const logout = async (e) => {
    try {
      await axios
        .get("http://localhost:4003/logout")
        .then((result) => {
          console.log(result);
          navigate(`/login`);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400) {
            console.log("error400");
          } else {
            console.log("error404");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const updateAll = async () => {
    console.log("take");
    try {
      await axios
        .get("http://localhost:4003/me")
        .then((result) => {
          console.log(result);
          setUser(result.data.user);
          setDetails(result.data.accountDetails)
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400) {
            console.log("error400");
          } else {
            console.log("error404");
          }
        }); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateAll();
  }, []);


  return (
    <div className="c">
      <Navd />
      <p className="c2">
        <div className="c21">
          <div className="c2a">Hello {user?.lastName}</div>
          <div className="c2b" onClick={logout}>
            <CgLogOut className="c2bb" />
            Logout
          </div>
        </div>
      </p>
      <p className="c3">
        <div className="c3a">
          <div className="c3a1">Account balance</div>
          <div className="c3a2">${details?.accountBalance}</div>
          <div className="c3i">
          <Link to='/withdraw'><PiHandWithdrawFill className="c3a3" /></Link>
          <Link to='/deposit'><PiHandDepositFill className="c3a33" /></Link>
          <Link to='/withdraw'><BiSolidUserPin className="c3a34" /></Link>
          </div>
          <div className="dbf">
            <Link to='/withdraw' className="dbf1">Withdraw</Link>
            <Link to='/deposit' className="dbf1">Deposit</Link>
            <Link to='/withdraw' className="dbf1">To HFCU</Link>
          </div>
          <div className="cni">
          <div className="cni1">
            <PiHandWithdrawFill className="cni1a"/>
            <Link to='/withdraw' className="cni1b">Withdraw</Link>
          </div>
          <div className="cni2">
          <PiHandDepositFill  className="cni2a"/>
          <Link to='/deposit'  className="cni2b">Deposit</Link>
          </div>
          <div className="cni3">
          <BiSolidUserPin  className="cni3a"/>
          <Link to='/withdraw' className="cni3b">To HFCU</Link>
          </div>
        </div>
          <div className="c3a55">
          <Link to='/savings-account' className="c3a5">View Savings</Link>
          </div>
          <div className="c3b">
            <div className="c3b1">
              <img src={logo} alt="" className="c3b1a" />
              <div className="c3b1b">HFCU</div>
              <TbCirclesFilled className="c3b1c" />
            </div>
            <div className="c3b2">Account Number</div>
            <div className="c3b2">{details?.accountNumber}</div>
          </div>
        </div>
        
        <div className="c4">
          <div className="c4a">
            <Link to="https://www.tradingview.com/markets/#indices" className="c4a1">
              <div className="c4a1a">Investments</div>
              <div className="c4a1b">
                <div className="c4a1b1">
                  <FaApple className="c41ab1" />
                </div>
                <div className="c41ab2">
                  <div className="c41ab2a">Apple</div>
                  <div className="c41ab2b">$2,300</div>
                </div>
                <div className="c41ab3">
                  <div className="c41ab3a">{details?.appleMarket}%</div>
                  <div className="c41ab3b">Per month</div>
                </div>
              </div>
              <div className="c4a1c">
                <div className="c4a1cc">
                  <SiTesla className="c41ac1" />
                </div>
                <div className="c41ab2">
                  <div className="c41ab2a">Tesla</div>
                  <div className="c41ac2b">$2,300</div>
                </div>
                <div className="c41ab3">
                  <div className="c41ac3a">{details?.teslaMarket}%</div>
                  <div className="c41ab3b">Per month</div>
                </div>
              </div>
              <div className="c4a1d">
                <div className="c4a1b1">
                  <FaXTwitter className="c41ab1" />{" "}
                </div>
                <div className="c41ab2">
                  <div className="c41ab2a">x</div>
                  <div className="c41ad2b">$2,300</div>
                </div>
                <div className="c41ab3">
                  <div className="c41ab3a">{details?.xMarket}%</div>
                  <div className="c41ab3b">Per month</div>
                </div>
              </div>
            </Link>
            <Link to="/loan-account" className="c4bb">
              <div className="c4b">
                <div className="c4b1">Vehichle Loans</div>
                <div className="c4b2">
                  View loan requirements{" "}
                  <span className="c4b1cc">
                    <FaCarOn className="c4b22" />
                  </span>
                </div>
                <div className="c4b3">Loans for any kind of vehichle</div>
              </div>
              <div className="c4c">
                <div className="c4b1">Personal Loans</div>
                <div className="c4b2">
                  View loan requirements
                  <span className="c4b1cc">
                    <MdPersonalInjury className="c4b22" />
                  </span>
                </div>
                <div className="c4b3">Loans for any kind of vehichle</div>
              </div>
            </Link>
          </div>
          
        </div>
        <div className="c5">
          <div className="c5a">
            <div className="c5a1">Contact Support</div>
            <div className="c5a2">
              {" "}
              <div className="c5a2aa">
                <BsRobot className="c5a2a" />
              </div>
              <div className="c5a2b">
                Hello~{user?.firstName} <br />
                {user?.lastName}
              </div>
            </div>
            <div className="c5a3">How can we help you?</div>
            <div className="c5a4">Call us at 715-599-5039</div>
          </div>
        </div>
      </p>
    </div>
  );
}
