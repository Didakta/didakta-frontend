import "../styles/header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/icon-white.png";

const Header = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(0);

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    navigate(`/`);
  };

  return (
    <>
      <div className="header-ct">
        <div className="header-logo-ct" onClick={() => navigate("/")}>
          <img className="header-logo-btn" src={logo} alt="Didakta Logo" />
        </div>
        <div className="header-icon-ct">
          <a className="header-icon" href="javascript:void(0)">
            <i className="fa fa-bars" onClick={() => setNavOpen(300)}></i>
          </a>
        </div>
      </div>

      {/* Side Navigation */}
      <div style={{ width: `${navOpen}px` }} className="side-nav-ct">
        <a
          href="javascript:void(0)"
          className="sidenav-close"
          onClick={() => setNavOpen(0)}
        >
          &times;
        </a>
        <NavLink className="side-nav-link" to="/">
          Home
        </NavLink>
        {localStorage.usertoken && (
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive && "#a7771f",
              };
            }}
            className="side-nav-link"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        )}
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive && "#a7771f",
            };
          }}
          className="side-nav-link"
          to="/about"
        >
          About Didakta
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive && "#a7771f",
            };
          }}
          className="side-nav-link"
          to="/contact"
        >
          Contact Us
        </NavLink>
        {localStorage.usertoken && (
          <>
            <hr className="h-ruller" />
            <NavLink className="side-nav-link" to="/user">
              Your Profile
            </NavLink>
            <Link className="side-nav-link" to="/" onClick={logOut}>
              Log Out
            </Link>
          </>
        )}
      </div>
    </>
  );
};
export default Header;
