import React, { useReducer } from "react";
import {
  Card,
  TextField,
  CardContent,
  Avatar,
  Button,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "../Css/SignUpForm.css";
import { addUser } from "../Services/UserServices";
import SignUpReducer, {
  initialState,
} from "../ReduxConnection/SignUpReducer.jsx";
import * as Yup from "yup";
import {
  setLnameError,
  setFnameError,
  setMnameError,
  setUseremailError,
  setPasswordError,
} from "../Action/SignUpAction.jsx";

const SignUpForm = (props) => {
  const [state, dispatch] = useReducer(SignUpReducer, initialState);

  const {
    fname,
    mname,
    lname,
    useremail,
    password,
    fnameerror,
    mnameerror,
    lnameerror,
    useremailerror,
    passworderror,
  } = state;

  console.log(state);

  const axois = (event) => {
    dispatch({
      type: `SET_${event.target.name.toUpperCase()}`,
      payload: event.target.value,
    });
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is Required"),
    mname: Yup.string().required("Middle Name is Required"),
    lname: Yup.string().required("Last Name is Required"),
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

  const registrationForm = () => {
    validationSchema
      .validate(
        { fname, mname, lname, useremail, password },
        { abortEarly: false }
      )
      .then(() => {
        let user = {};

        user.fName = fname;
        user.mName = mname;
        user.lName = lname;
        user.userEmail = useremail;
        user.password = password;
        console.log(user);
        addUser(user)
          .then((Response) => {
            console.log(Response, "User Registered successfully!!");
            alert(`User Registered successfully`);
            props.history.push("/");
          })
          .catch((error) => {
            console.log("Error", error.response);
            console.log(
              error.response.data.message,
              "User Registration failed"
            );
            alert(error.response.data.message);
          });
      })
      .catch((error) => {
        console.log(error);
        error.inner.forEach((element) => {
          console.log(element);
          if (element.path === "fname") {
            dispatch(setFnameError(element.message));
            console.log(element.message);
          }
          if (element.path === "mname") {
            dispatch(setMnameError(element.message));
            console.log(element.message);
          }
          if (element.path === "lname") {
            dispatch(setLnameError(element.message));
            console.log(element.message);
          }
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
    <Card className="signupcard">
      <CardContent>
        <div className="signuppage">
          <Avatar className="signupavatar">
            <PersonAddIcon />
          </Avatar>
          <div className="signupLogin">
            <span component="h1" variant="h5">
              <h4>Sign up</h4>
            </span>
          </div>
        </div>
        <div className="userinfo">
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="firstname"
            label="First Name"
            name="fName"
            autoComplete="fName"
            onChange={axois}
            error={fnameerror}
            helperText={fnameerror}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth="true"
            id="middlename"
            label="Middle Name"
            name="mName"
            autoComplete="mName"
            onChange={axois}
            error={mnameerror}
            helperText={mnameerror}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth="true"
            id="lastname"
            label="Last Name"
            name="lName"
            autoComplete="lName"
            onChange={axois}
            error={lnameerror}
            helperText={lnameerror}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth="true"
            id="email"
            label="Email Address"
            name="userEmail"
            autoComplete="userEmail"
            onChange={axois}
            error={useremailerror}
            helperText={useremailerror}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth="true"
            id="email"
            label="Password"
            name="password"
            autoComplete="password"
            type="password"
            onChange={axois}
            error={passworderror}
            helperText={passworderror}
          ></TextField>

          <Button
            className="signup"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={registrationForm}
          >
            Sign-up
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
