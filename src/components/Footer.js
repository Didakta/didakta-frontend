import logo from "../images/logo-black.png";
import github from "../images/github.svg";
import telegram from "../images/telegram.svg";
import twitter from "../images/twitter.svg";
import envelope from "../images/envelope-fill.svg";

import { Link } from "react-router-dom";
import "../styles/footer.css";

function Copyright() {
  return (
    <div className="copyright">
      Copyright© {new Date().getFullYear()} by Didakta
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footerPalette">
      <div className="footerContainer">
        <div className="logoCol">
          <div className="footerLogo">
            <img className="logoImg" src={logo} width="100" />
          </div>

          <div className="social">
            <div className="socialIcon">
              <a href="https://github.com/mrclcyn/Didakta-Frontend.git">
                <img src={github} width="30" alt="GitHub Link" />
              </a>
            </div>

            <div className="socialIcon">
              <a href="">
                <img src={twitter} width="30" alt="Twitter Link" />
              </a>
            </div>
            <div className="socialIcon">
              <a href="">
                <img src={telegram} width="30" alt="Telegram Link" />
              </a>
            </div>
            <div className="socialIcon">
              <a href="mailto:didakta.project@gmail.com">
                <img src={envelope} width="30" alt="Email Link" />
              </a>
            </div>
          </div>
        </div>
        <div className="emptyCol"></div>
        <div className="linksCol">
          <ul className="footerMenu">
            <li>
              <a href="http://ugarit.ialigner.com/" target="_blank">
                Ugarit Project
              </a>
            </li>
            <li>
              <a href="https://scaife.perseus.org/" target="_blank">
                Scaife Viewer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
