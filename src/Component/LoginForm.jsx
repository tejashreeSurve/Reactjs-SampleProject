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
import HeaderBar from "../Component/HeaderBar.jsx";
import { loginUser } from "../Services/UserServices";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { addNewUser } from "../ReduxConnection/action.jsx";
import { connect } from "react-redux";
import FullScreenLoader from "../Component/FullScreenLoader.jsx";
import { trackPromise } from "react-promise-tracker";
import LoginReducer, { initialState } from "../ReduxConnection/LoginReducer";
import {
  setErrors,
  setLoading,
  setShowpassword,
} from "../ReduxConnection/LoginAction.jsx";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const axois = (event) => {
    dispatch({
      type: `SET_${event.target.name.toUpperCase()}`,
      payload: event.target.value,
    });
  };

  const { userEmail, password, showpassword, loading, errors } = state;
  const validateForm = () => {
    let errors = {};
    console.log(errors);
    let formIsValidate = true;
    if (!userEmail) {
      errors.useremail = "*enter email ";
      formIsValidate = false;
    }
    if (!password) {
      errors.password = "*enter password ";
      formIsValidate = false;
    }
    if (
      !RegExp(
        "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
      ).test(userEmail)
    ) {
      errors.userEmail = "*enter valide User Email ";
      formIsValidate = false;
    }
    if (!RegExp("(?=.*[0-9])").test(password)) {
      errors.password = "*enter valide password ";
      formIsValidate = false;
    }
    setErrors(errors);
    console.log(errors);
    return formIsValidate;
  };
  const loginForm = (event) => {
    if (validateForm()) {
      setLoading(true);
      event.preventDefault();
      let loginData = {};

      loginData.userEmail = userEmail;
      loginData.password = password;
      console.log(loginData);
      trackPromise(
        loginUser(loginData)
          .then((response) => {
            console.log(response);
            console.log("data", response.data.data);
            // props.add(response.data.data);
            localStorage.setItem("token", response.data.message);
            alert(`Login Successfully`);
            props.history.push(`/headerBar`);
          })
          .catch((error) => {
            console.log(error);
            alert(`Login Failed`);
          })
      );
    }
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
        <form className="loginform" noValidate onSubmit={loginForm}>
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
            error={errors.userEmail}
            helperText={errors.userEmail}
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
            error={errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" style={{ width: "10px" }}>
                  <IconButton onClick={setShowpassword(!showpassword)}>
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
            disabled={loading}
          >
            Login{" "}
          </Button>
          <Grid Container className="grid">
            <Grid item>
              <Link href="http://localhost:3000/registerUser" variant="body2">
                {"Don't have an account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <box className="boxname"></box>
    </Container>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   add: (user) => dispatch(addNewUser(user)),
// });
export default LoginForm;
