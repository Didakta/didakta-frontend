import "../styles/homenavbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// import logo from "../images/icon-white.png";

const HomeNavBar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(0);

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    navigate(`/`);
  };

  return (
    <>
      <div className="homenavbar-ct">
        <div className="homenavbar-icon-ct">
          <a className="homenavbar-icon" href="javascript:void(0)">
            <i
              className="fa fa-bars"
              onClick={() => {
                navOpen === 0 ? setNavOpen(300) : setNavOpen(0);
              }}
            ></i>
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
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive && "#a7771f",
            };
          }}
          className="side-nav-link"
          to="/"
        >
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
export default HomeNavBar;
