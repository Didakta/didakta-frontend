import ugarit from "../images/ugarit.png";
import perseus from "../images/Perseus.jpg";
import github from "../images/github.svg";
import telegram from "../images/telegram.svg";
import envelope from "../images/envelope-fill.svg";
import ccl from "../images/cc-l.png";

import { HashLink } from "react-router-hash-link";
import "../styles/footer.css";

function Copyright() {
  return (
    <div className="copyright">
      <a
        className="cc-icon"
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ccl} alt="" />
      </a>
      <br />
      Creative Commons Attribution-ShareAlike 4.0 International License©
      {new Date().getFullYear()}
      <br />
      Implemented by{" "}
      <div className="mrclcyn-ct">
        <a
          className="mrclcyn"
          href="https://github.com/mrclcyn"
          target="_blank"
          rel="noreferrer"
        >
          mrclcyn
        </a>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <div className="ft-ct">
        <div className="ft-content-ct">
          <div className="ft-col-1 col-3"></div>
          <div className="ft-col-2 col-3">
            <h3>Didakta</h3>
            <ul>
              <li>
                <HashLink to="/about#why">Why Didakta</HashLink>
              </li>
              <li>
                <HashLink to="/about#who">About us</HashLink>
              </li>
              <li>
                <HashLink to="/contact">Contact us</HashLink>
              </li>
            </ul>
          </div>
          <div className="ft-col-3 col-3">
            <h3>Our Resources</h3>
            <ul>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  Modular Grammar
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  Glossary for Iliad One
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  Pinakedon: Greek Morphology
                </a>
              </li>
            </ul>
          </div>
          <div className="ft-col-4 col-3">
            <a
              href="http://ugarit.ialigner.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ugarit} alt="Ugarit Logo" />
            </a>
            <a
              href="https://scaife.perseus.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderRadius: "5px" }}
                src={perseus}
                alt="Perseus Logo"
              />
            </a>
          </div>
        </div>

        <div className="ft-social">
          <a href="mailto:info@didakta.org" target="_blank" rel="noreferrer">
            <img src={envelope} width="30" alt="Email Link" />
          </a>
          <a
            href="https://github.com/mrclcyn/didakta-reactjs.git"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} width="30" alt="GitHub Link" />
          </a>
          <a href="https://t.me/didakta" target="_blank" rel="noreferrer">
            <img src={telegram} width="30" alt="Telegram Link" />
          </a>
        </div>
      </div>
      <div className="copyright-ct">
        <Copyright />
      </div>
      <div className="bug-ct">
        <a
          className="find-a-bug"
          href="https://github.com/mrclcyn/didakta-reactjs/issues"
          target="_blank"
          rel="noreferrer"
        >
          Did you just find a bug?
        </a>
      </div>
    </>
  );
};

export default Footer;
