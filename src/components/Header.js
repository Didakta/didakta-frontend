import "../styles/header.css";
import logo from "../images/icon-white.png";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { logOut, getUserId } from "../functions/userFunctions";

const Header = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(0);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const id = localStorage.usertoken && getUserId();
    setUserId(id);
  }, []);

  return (
    <>
      <div className="header-ct">
        <Link className="header-logo-ct" to="/">
          <img className="header-logo-btn" src={logo} alt="Didakta Logo" />
        </Link>
        <div className="header-icon-ct">
          <button
            className="header-icon"
            onClick={() => {
              setNavOpen(300);
            }}
          >
            ≡
          </button>
        </div>
      </div>

      {/* Side Navigation */}
      <div style={{ width: `${navOpen}px` }} className="side-nav-ct">
        <button className="sidenav-close" onClick={() => setNavOpen(0)}>
          &times;
        </button>
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
        {!localStorage.usertoken && (
          <>
            <hr className="h-ruller" />
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive && "#a7771f",
                };
              }}
              className="side-nav-link"
              to="/register"
            >
              Sign Up
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive && "#a7771f",
                };
              }}
              className="side-nav-link"
              to="/login"
            >
              Log In
            </NavLink>
          </>
        )}
        {localStorage.usertoken && (
          <>
            <hr className="h-ruller" />
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive && "#a7771f",
                };
              }}
              className="side-nav-link"
              to={`/user/${userId}`}
            >
              Your Profile
            </NavLink>
            <Link
              className="side-nav-link"
              to="/"
              onClick={(e) => logOut(e, navigate)}
            >
              Log Out
            </Link>
          </>
        )}
      </div>
    </>
  );
};
export default Header;
