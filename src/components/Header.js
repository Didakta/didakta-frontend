import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "reactstrap";
import { NavbarBrand } from "reactstrap";
import { NavbarToggler } from "reactstrap";
import { Collapse } from "reactstrap";
import { Nav } from "reactstrap";
import { NavItem } from "reactstrap";
import { NavLink } from "reactstrap";
import { NavbarText } from "reactstrap";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    navigate(`/`);
  };

  return (
    <div className="headerContainer">
      <Navbar expand="md" light>
        <NavbarBrand>
          <Link to="/">
            <img
              className="headerLogo"
              src={logo}
              width="100"
              alt="Didakta logo"
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            {localStorage.usertoken && (
              <NavItem className="menuItem">
                <NavLink>
                  <Link to="/dashboard">DASHBOARD</Link>
                </NavLink>
              </NavItem>
            )}
            {localStorage.usertoken && (
              <NavItem>
                <NavLink>
                  <a href="#" onClick={logOut}>
                    LOGOUT
                  </a>
                </NavLink>
              </NavItem>
            )}
            {!localStorage.usertoken && (
              <NavItem className="menuItem">
                <NavLink>
                  <Link to="/login">LOGIN</Link>
                </NavLink>
              </NavItem>
            )}
            {!localStorage.usertoken && (
              <NavItem>
                <NavLink>
                  <Link to="/register">REGISTER</Link>
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
