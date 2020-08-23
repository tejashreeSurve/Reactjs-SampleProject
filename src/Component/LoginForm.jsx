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
import { Form, FormFeedback } from "reactstrap";
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
  setLoading,
  setShowpassword,
  setUsernameError,
  setPasswordError,
} from "../ReduxConnection/LoginAction.jsx";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = (props) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const axois = (event) => {
    dispatch({
      type: `SET_${event.target.name.toUpperCase()}`,
      payload: event.target.value,
    });
  };

  const {
    userEmail,
    password,
    showpassword,
    loading,
    userError,
    passwordError,
    errors,
  } = state;
  const loginDetails = { userEmail, password };

  const validationSchema = Yup.object().shape({
    userEmail: Yup.string()
      .email("Email must be a valid Email")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(
        7,
        "Password is too short - should be 8 chars minimum and must contain numbers."
      ),
  });

  // const validateForm = () => {
  //   let errors = {};
  //   console.log(errors);
  //   let formIsValidate = true;
  //   if (!userEmail) {
  //     setUsernameError("*enter email ");
  //     formIsValidate = false;
  //   }
  //   if (!password) {
  //     setPasswordError("*enter password ");
  //     formIsValidate = false;
  //   }
  //   if (
  //     !RegExp(
  //       "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
  //     ).test(userEmail)
  //   ) {
  //     setUsernameError("*enter valide User Email ");
  //     formIsValidate = false;
  //   }
  //   if (!RegExp("(?=.*[0-9])").test(password)) {
  //     setUsernameError("*enter valide password ");
  //     formIsValidate = false;
  //   }
  //   // console.log("hello errorss", errors);
  //   // setErrors(errors);
  //   // console.log(errors);
  //   return formIsValidate;
  // };

  // const loginForm = (event) => {
  //   validationSchema
  //     .validate(loginDetails)
  //     .then(() => {
  //       setLoading(true);
  //       console.log(loading);
  //       //dispatch(setLogin(true));
  //       event.preventDefault();
  //       console.log("login", loading);
  //       const loginData = { userEmail, password };
  //       trackPromise(
  //         loginUser(loginData)
  //           .then((response) => {
  //             console.log(response);
  //             console.log("data", response.data.data);
  //             // props.add(response.data.data);
  //             localStorage.setItem("token", response.data.message);
  //             alert(`Login Successfully`);
  //             console.log(localStorage.token);
  //             if (localStorage.token === response.data.message) {
  //               props.history.push("/headerbar");
  //               //return <Redirect to="/headerbar" />;
  //             }
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //             alert(`Login Failed`);
  //           })
  //       );

  //       // apiHelper("post", "https://api.taiga.io/api/v1/auth", {
  //       //   username: username,
  //       //   password: password,
  //       //   type: "normal",
  //       // }).then(({ data }) => {
  //       //   dispatch(setUserDetails(data));
  //       //   console.log(data);
  //       // });
  //     })
  //     .catch((error) => {
  //       error.inner.forEach((ele) => {
  //         if (ele.path === "userEmail") {
  //           setUsernameError(ele.message);
  //           console.log(usernameError);
  //         }
  //         if (ele.path === "password") setPasswordError(ele.message);
  //       });
  //     });
  // };
  const loginForm = (event) => {
    console.log("hello =====");
    event.preventDefault();
    validationSchema
      .validate({ userEmail, password }, { abortEarly: false })
      .then(() => {
        //setLoading(true);
        dispatch({
          type: "SET_LOADING",
          payload: true,
        });
        console.log("Loading", loading);
        // event.preventDefault();
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
              console.log(localStorage.token);
              if (localStorage.token) {
                //props.history.push("/headerbar");
                return <Redirect to="/headerbar" />;
              }
            })
            .catch((error) => {
              console.log(error);
              alert(`Login Failed`);
            })
        );
      })
      .catch((error) => {
        console.log("hiiiiiii");
        console.log(error);
        error.inner.forEach((element) => {
          if (element.path === "userEmail") {
            // setUsernameError(element.message);
            // console.log(setUsernameError(element.message));
            dispatch({
              type: "SET_ERROR",
              payload: element.message,
            });
            console.log(element.message);
            console.log("hello", errors);
          }
          if (element.path === "password") setPasswordError(element.message);
        });
      });
  };
  // const loginForm = (event) => {
  //   console.log("hello");
  //   event.preventDefault();
  //   console.log(userEmail, password);
  //   validationSchema
  //     .validate({ userEmail, password })
  //     .then(() => {
  //       console.log("validate");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
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
        <Form className="loginform" onSubmit={loginForm}>
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
            error={userError}
            helperText={userError}
          />
          {/* <FormFeedback>{usernameError}</FormFeedback> */}
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
            error={passwordError}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" style={{ width: "10px" }}>
                  <IconButton onClick={() => setShowpassword(!showpassword)}>
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
            //disabled=loading
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
        </Form>
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
