import "../styles/homenavbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { logOut, getUserId } from "../functions/userFunctions";

const HomeNavBar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(0);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const id = localStorage.usertoken && getUserId();
    setUserId(id);
  }, []);

  return (
    <>
      <div className="homenavbar-ct">
        <div className="homenavbar-icon-ct">
          <button
            className="homenavbar-icon"
            onClick={() => {
              navOpen === 0 ? setNavOpen(300) : setNavOpen(0);
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
        {!localStorage.usertoken && (
          <>
            <hr className="h-ruller" />
            <NavLink className="side-nav-link" to="/register">
              Sign Up
            </NavLink>
            <NavLink className="side-nav-link" to="/login">
              Log In
            </NavLink>
          </>
        )}
        {localStorage.usertoken && (
          <>
            <hr className="h-ruller" />
            <NavLink className="side-nav-link" to={`/user/${userId}`}>
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
export default HomeNavBar;
