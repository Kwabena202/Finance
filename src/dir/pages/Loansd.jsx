import React, {useState, useEffect} from "react";
import { CgLogOut } from "react-icons/cg";
import { PiHandWithdrawFill } from "react-icons/pi";
import { PiHandDepositFill } from "react-icons/pi";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FaMeta } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { BsRobot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navd from "./Navd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Loansd() {
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
          <div className="s1a1">Loan Accounts</div>
          <div className="s1a2">
            Personal loans are designed to provide <br />
            flexibility and support members <br />
            of Heritage Financial Credit Union.
          </div>
        </div>
        <div className="s1cc">
          <div className="s1c11">
            <div className="s1c1">Loan balance</div>
            <div className="s1c2">${details?.lAccountBalance}</div>
          </div>
          <div className="s1c33">
              <div className="s1c4a">Request Loan, call us now!</div>
          </div>
          <div className="s1c5">
            <div className="s1c5a">Interest rates</div>
            <div className="s1c5b">{details?.lInterestRates}%</div>
          </div>
        </div>
        <Link to= "/https://www.tradingview.com/markets/#indices" className="lo1">
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
        <div className="l5a">
          <div className="c5a1">Contact Support</div>
          <div className="l5a2">
            {" "}
            <div className="c5a2aa">
              <BsRobot className="c5a2a" />
            </div>
            <div className="l5a2b">
              Hello~{user?.lastName} <br />
              {user?.firstName}
            </div>
          </div>
          <div className="l5a3">How can we help you?</div>
          <div className="l5a4">Call us at 715-599-5039</div>
        </div>
      </p>
      <p className="ll1">
        <div className="ll1a">
          <div className="ll1a1">Personal Loans</div>
          <div className="ll1a2">
            Loans amounts vary but can typically range from $1,000 to
            <br />
            $50,000 or more, depending on the borrower's creditworthiness
            <br />
            and also terms & conditions apply.
          </div>
          <div className="ll1a3">
            <div>Requirements:</div>
            <div className="ll1a33a">Credit History</div>
            <div className="lll1a33a">Credit <br />
              History</div>
            <div className="ll1a33a">Income and Employment</div>
            <div className="lll1a33b">Income and <br />
              Employment</div>
          </div>
          <div className="ll1a33">p</div>
          <div className="ll1a4">
            <div>Amount:</div>
            <div className="ll1a4b">${details?.plStartup}</div>
            <div className="ll1a4c">{details?.plInterest}%</div>
          </div>
        </div>
        <div className="ll1a">
          <div className="ll1a1">Vehicle Loans</div>
          <div className="ll1a2">
            The exact score required ranges from $600 to $700 or higher, 
            <br />
            a history of responsible credit use and timely payments is,
            <br />
            preferred.
          </div>
          <div className="ll1a3">
            <div>Requirements:</div>
            <div className="ll1a33a">Credit History</div>
            <div className="lll1a33a">Credit <br />
              History</div>
            <div className="ll1a33a">Income and Employment</div>
            <div className="lll1a33b">Income and <br />
              Employment</div>
          </div>
          <div className="ll1a33">p</div>
          <div className="ll1a4">
            <div>Amount</div>
            <div className="ll2a4b">${details?.vlStartup}</div>
            <div className="ll2a4c">{details?.vlInterest}%</div>
          </div>
        </div>
      </p>
    </div>
  );
}
