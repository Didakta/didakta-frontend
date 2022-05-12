import "../styles/register.css";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../functions/userFunctions";

import Header from "./Header";
import NotFound from "./NotFound";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    login(userData).then((res) => {
      if (res) {
        navigate("/dashboard");
      }
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  if (localStorage.usertoken) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <div className="reg-ct" style={{ backgroundColor: "#6e7c8b" }}>
        <div className="reg-form-ct">
          <h1 className="reg-title">Login to your dashboard</h1>
          <form className="reg-form" onSubmit={handleSubmit}>
            <fieldset className="reg-form-fieldset">
              <legend className="reg-input-legend">Email</legend>
              <input
                className="login-form-input"
                id="userEmail"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </fieldset>
            <fieldset className="reg-form-fieldset">
              <legend className="reg-input-legend">Password</legend>
              <input
                className="login-form-password"
                id="password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </fieldset>
            <input
              className="login-form-submit"
              type="submit"
              value="DASHBOARD"
            />
            <div className="reg-form-links-ct">
              <Link to="/reset-password">Forgot your password?</Link>
              <Link to="/register">Not registered yet?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs">
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         marginBottom: 20,
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
    //         {/* <LockOutlinedIcon /> */}
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Sign in
    //       </Typography>
    //       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="email"
    //           label="Email"
    //           name="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           autoComplete="email"
    //           autoFocus
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Sign In
    //         </Button>
    //         <Grid container>
    //           <Grid item xs>
    //             <Link href="#" variant="body2">
    //               Forgot password?
    //             </Link>
    //           </Grid>
    //           <Grid item>
    //             <Link href="/register" variant="body2">
    //               {"Don't have an account? Sign Up"}
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //   </Container>
    // </ThemeProvider>
  );
};

export default Login;
