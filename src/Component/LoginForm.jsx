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
  loginAction,
} from "../Action/LoginAction.jsx";
import * as Yup from "yup";
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

  const { userDetails, userListData } = reduxResult;

  console.log("login state", state);
  const axois = (event) => {
    dispatch({
      type: `SET_${event.target.name.toUpperCase()}`,
      payload: event.target.value,
    });
  };
  const loginDetails = { useremail, password };
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

  let loginData = {};

  loginData.userEmail = useremail;
  loginData.password = password;
  const loginForm = (event) => {
    event.preventDefault();
    validationSchema.isValid(loginDetails).then(function (valid) {
      if (!valid) {
        validationSchema
          .validate(loginDetails, { abortEarly: false })
          .catch((error) => {
            error.inner.forEach((ele) => {
              if (ele.path === "username")
                dispatch(setUseremailError(ele.message));

              if (
                ele.path ===
                "passwo                                                                                  rd"
              )
                dispatch(setPasswordError(ele.message));
            });
          });
      } else {
        reduxDispatch(loginAction(loginData));
        props.history.push("/headerbar");
      }
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
