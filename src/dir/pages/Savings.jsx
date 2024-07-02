import React, {useState, useEffect} from "react";
import logo from "../components/IMG_E1332-min.png";
import { CgLogOut } from "react-icons/cg";
import { PiHandWithdrawFill } from "react-icons/pi";
import { PiHandDepositFill } from "react-icons/pi";
import { TbCirclesFilled } from "react-icons/tb";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FaMeta } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaCarOn } from "react-icons/fa6";
import { MdPersonalInjury } from "react-icons/md";
import { Link } from "react-router-dom";
import Navd from "./Navd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Savings() {
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
      <p className="s1">
        <div className="s1a">
          <div className="s1a1">Savings Account</div>
          <div className="s1a2">
            Set and track savings goals with our <br />
            interactive tools to achieve your <br />
            financial milestones.
          </div>
        </div>
        <Link to='/deposit' className="s1b">+</Link>
        <div className="s1c">
          <div className="s1c11">
            <div className="s1c1">Savings balance</div>
            <div className="s1c2">{details?.sAccountBalance}</div>
          </div>
          <div className="s1c33">
            <div className="s1c3">
              <Link to='/withdraw'><PiHandWithdrawFill className="s1c3a" /></Link>
              <Link to='/deposit'><PiHandDepositFill className="s1c3b" /></Link>
            </div>
            <div className="s1c4">
              <Link to='/withdraw' className="s1c4a">Withdraw</Link>
              <Link to='/deposit' className="s1c4b">Deposit</Link>
            </div>
          </div>
          <div className="ss133">
            <div className="ss133a">
            <PiHandWithdrawFill  className="ss133a1"/>
            <div className="ss133a2">Withdraw</div>
            </div>
            <div className="ss133b">
            <PiHandDepositFill  className="ss133b1"/>
            <div  className="ss133b2">Deposit</div>
            </div>
          </div>
          <div className="s1c5">
            <div className="s1c5a">Interest rates</div>
            <div className="s1c5b">{details?.sInterestRates}%</div>
          </div>
        </div>
        <div className="s1c">
          <div className="c3b1">
            <img src={logo} alt="" className="c3b1a" />
            <div className="c3b1b">HFCU</div>
            <TbCirclesFilled className="c3b1c" />
          </div>
          <div className="c3b2">Account Number</div>
          <div className="c3b2">{details?.accountNumber}</div>
        </div>
        <Link to="https://www.tradingview.com/markets/#indices" className="c6">
          <div className="c6a">Markets</div>
          <div className="c6b">
            <div>
              <span className="c6b1a">
                <AiFillAmazonSquare className="c4e22" />
                Amazon
              </span>
              <span className="c6b1a">
                <FaMeta className="c4e33" />
                Meta Platforms
              </span>
            </div>
            <div className="c6b2">
              <span className="c6b2a">
                <RiNetflixFill className="c4e55" />
                Netflix
              </span>
              <span className="c6b2b">
                <FaMicrosoft className="c4e44" />
                Microsoft
              </span>
            </div>
          </div>
        </Link>
      </p>
      <p className="s2">
        <div className="s2a">
          <div className="s2a1">Interest Rates</div>
          <div className="s2a2">
            <div>Account</div>
            <div className="s2a2a">Startup</div>
            <div className="s2a2b">Interest</div>
          </div>
          <div className="s2a3">
            <div className="s2a33a">Certificate Account</div>
            <div className="s2a33aa">Certificate <br />
            Account
            </div>
            <div className="s2a3a">${details?.caStartup}</div>
            <div className="s2a3b">{details?.caInterest}%</div>
          </div>
          <div className="s2a4">p</div>
          <div className="s2a5">
            <div className="s2a55a">Health Savings Account</div>
            <div className="s2a55aa">
              Health <br />
              Savings <br />
              Account
            </div>
            <div className="s2a5a">${details?.hsaStartup}</div>
            <div className="s2a5b">{details?.hsaInterest}%</div>
          </div>
          <div className="s2a4">p</div>
          <div className="s2a6">
            <div className="s2a66a">Individual Retirement Account</div>
            <div className="s2a6a"> 
              Individual <br />
              Retirement <br />
              Account
            </div>
            <div className="s2a6b">${details?.iraStartup}</div>
            <div className="s2a6c">{details?.iraInterest}%</div>
          </div>
        </div>
        <Link to='/loan-account' className="s2b">
          <div className="s2b1">
            <div className="s2b1a">Vehichle Loans</div>
            <div className="s2b1b">
              View loan requirements{" "}
              <span className="c4b1cc">
                <FaCarOn className="c4b22" />
              </span>
            </div>
          </div>
          <div className="s2b2">
            <div className="s2b1a">Personal Loans</div>
            <div className="s2b1b">
              View loan requirements
              <span className="c4b1cc">
                <MdPersonalInjury className="c4b22" />
              </span>
            </div>
          </div>
        </Link>
        <div className="s2a">
          <div className="s2a1">Earnings</div>
          <div className="s2a2">
            <div>Account</div>
            <div className="s2a2a">Balance</div>
            <div className="s2a2b">Profits</div>
          </div>
          <div className="s2a3">
          <div className="s2a33a">Certificate Account</div>
            <div className="s2a33aa">Certificate <br />
            Account
            </div>
            <div className="s2c3a">${details?.ecaBalance}</div>
            <div className="s2c3b">${details?.ecaProfits}</div>
          </div>
          <div className="s2a4">p</div>
          <div className="s2a5">
          <div className="s2a55a">Health Savings Account</div>
            <div className="s2a55aa">
              Health <br />
              Savings <br />
              Account
            </div>
            <div className="s2c5a">${details?.hsaBalance}</div>
            <div className="s2c5b">${details?.hsaProfits}</div>
          </div>
          <div className="s2a4">p</div>
          <div className="s2a6">
          <div className="s2a66a">Individual Retirement Account</div>
            <div className="s2a6a"> 
              Individual <br />
              Retirement <br />
              Account
            </div>
            <div className="s2c6a">${details?.iraBalance}</div>
            <div className="s2c5b">${details?.iraProfits}</div>
          </div>
        </div>
      </p>
    </div>
  );
}
