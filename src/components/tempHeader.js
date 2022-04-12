import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState, useEffect } from "react";

const ButtonAppBar = () => {
  const [usertoken, setUsertoken] = useState("");

  const getToken = async () => {
    const userToken = await localStorage.usertoken;
    setUsertoken(userToken);
  };

  useEffect(() => {
    getToken();
  }, []);

  if (usertoken) {
    return (
      <div>
        <Box sx={{ flexGrow: 1, backgroundColor: "#78909c " }}>
          <AppBar sx={{ backgroundColor: "#78909c" }} position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">
                  <img
                    id="Logo"
                    width="100"
                    padding-top="10"
                    src={logo}
                    alt="Didakta Logo"
                    style={{ paddingTop: "10px" }}
                  />
                </Link>
              </Typography>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fffde7" }}>About</Button>
              </Link>

              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fffde7" }}>Dashboard</Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  onClick={() => localStorage.clear()}
                  sx={{ color: "#fffde7" }}
                >
                  Logout
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Box sx={{ flexGrow: 1, backgroundColor: "#78909c " }}>
          <AppBar sx={{ backgroundColor: "#78909c" }} position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">
                  <img
                    id="Logo"
                    width="100"
                    padding-top="10"
                    src={logo}
                    alt="Didakta Logo"
                    style={{ paddingTop: "10px" }}
                  />
                </Link>
              </Typography>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fffde7" }}>About</Button>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fffde7" }}>About</Button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fffde7" }}>Login</Button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fffde7" }}>Register</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
};
export default ButtonAppBar;
