import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import "../Css/LoginForm.css";
import {
  Container,
  Avatar,
  TextField,
  Button,
  Typography,
  CssBaseline,
  Grid,
  Link,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { loginUser } from "../Services/UserServices";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { trackPromise } from "react-promise-tracker";
import LoginReducer, {
  initialState,
} from "../ReduxConnection/LoginReducer.jsx";
import {
  setLoading,
  setShowpassword,
  setUseremailError,
  setPasswordError,
} from "../Action/LoginAction.jsx";
import * as Yup from "yup";
import auth from "../Component/Authentication.jsx";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = (props) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const reduxResult = useSelector((state) => state);
  const reduxDispatch = useDispatch();
  const {
    useremail,
    password,
    showpassword,
    loading,
    useremailerror,
    passworderror,
  } = state;

  console.log("login state", state);
  const axois = (event) => {
    dispatch({
      type: `SET_${event.target.name.toUpperCase()}`,
      payload: event.target.value,
    });
  };

  const validationSchema = Yup.object().shape({
    useremail: Yup.string()
      .email("Email must be a valid Email")
      .required("Email is Required"),
    password: Yup.string()
      .min(
        7,
        "Password is too short - should be 8 chars minimum and must contain numbers."
      )
      .required("Password is Required"),
  });

  const loginForm = (event) => {
    event.preventDefault();
    validationSchema
      .validate({ useremail, password }, { abortEarly: false })
      .then(() => {
        dispatch(setLoading(true));
        let loginData = {};

        loginData.userEmail = useremail;
        loginData.password = password;
        trackPromise(
          loginUser(loginData)
            .then((response) => {
              console.log(response);
              console.log("data", response.data.data);
              reduxDispatch({
                type: "SET_USERDETAILS",
                payload: response.data.data,
              });
              localStorage.setItem("token", response.data.message);
              alert(`Login Successfully`);
              console.log(localStorage.token);
              auth.login(() => {
                props.history.push("/headerbar");
              });
            })
            .catch((error) => {
              console.log(error);
              alert(`Login Failed`);
            })
        );
      })
      .catch((error) => {
        console.log(error);
        error.inner.forEach((element) => {
          console.log(element);
          if (element.path === "useremail") {
            dispatch(setUseremailError(element.message));
            console.log(element.message);
          }
          if (element.path === "password") {
            dispatch(setPasswordError(element.message));
            console.log(element.message);
          }
        });
      });
  };

  return (
    <Container className="container" component="main" maxWidth="xs" box>
      <CssBaseline />
      <div className="loginpaper">
        <Avatar className="loginavatar">
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign-in
        </Typography>
        <div className="loginform">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="userEmail"
            autoComplete="userEmail"
            autoFocus
            onChange={axois}
            error={useremailerror}
            helperText={useremailerror}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password "
            type={showpassword ? "text" : "password"}
            onChange={axois}
            error={passworderror}
            helperText={passworderror}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start" style={{ width: "30px" }}>
                  <IconButton
                    onClick={() => dispatch(setShowpassword(!showpassword))}
                  >
                    {showpassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            className="loginbutton"
            type="submit"
            fullwidth
            variant="contained"
            color="primary"
            onClick={loginForm}
            disabled={loading}
          >
            Login
          </Button>
          <Grid Container className="grid">
            <Grid item>
              <Link href="http://localhost:3000/registerUser" variant="body2">
                {"Don't have an account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <box className="boxname"></box>
    </Container>
  );
};

export default LoginForm;
