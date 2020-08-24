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

const SignUpForm = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fName: "",
  //     mName: "",
  //     lName: "",
  //     userEmail: "",
  //     password: "",
  //     errors: {},
  //   };
  // }

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

  // axios = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // validateForm = () => {
  //   let errors = {};
  //   let formIsValidate = true;
  //   if (!this.state.fName) {
  //     errors["fName"] = "*enter first Name";
  //     formIsValidate = false;
  //   }
  //   if (!this.state.mName) {
  //     errors["mName"] = "*enter Middle Name";
  //     formIsValidate = false;
  //   }
  //   if (!this.state.lName) {
  //     errors["lName"] = "*enter Last Name";
  //     formIsValidate = false;
  //   }
  //   if (!this.state.userEmail) {
  //     errors["userEmail"] = "*enter email ";
  //     formIsValidate = false;
  //   }
  //   if (!this.state.password) {
  //     errors["password"] = "*enter password ";
  //     formIsValidate = false;
  //   }
  //   if (
  //     !RegExp(
  //       "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
  //     ).test(this.state.userEmail)
  //   ) {
  //     errors["password"] = "*enter valide User Email ";
  //     formIsValidate = false;
  //   }
  //   if (!RegExp("(?=.*[0-9])").test(this.state.password)) {
  //     errors["password"] = "*enter valide password ";
  //     formIsValidate = false;
  //   }
  //   this.setState({
  //     errors: errors,
  //   });
  //   return formIsValidate;
  // };

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
            dispatch({
              type: "SET_FNAMEERROR",
              payload: `*${element.message}`,
            });
            console.log(element.message);
          }
          if (element.path === "mname") {
            dispatch({
              type: "SET_MNAMEERROR",
              payload: element.message,
            });
            console.log(element.message);
          }
          if (element.path === "lname") {
            dispatch({
              type: "SET_LNAMEERROR",
              payload: element.message,
            });
            console.log(element.message);
          }
          if (element.path === "useremail") {
            dispatch({
              type: "SET_USEREMAILERROR",
              payload: element.message,
            });
            console.log(element.message);
          }
          if (element.path === "password") {
            dispatch({
              type: "SET_PASSWORDERROR",
              payload: element.message,
            });
            console.log(element.message);
          }
        });
      });
  };
  // registrationForm() {
  //   if (this.validateForm()) {
  //     let user = {};

  //     user.fName = this.state.fName;
  //     user.mName = this.state.mName;
  //     user.lName = this.state.lName;
  //     user.userEmail = this.state.userEmail;
  //     user.password = this.state.password;
  //     console.log(user);
  //     addUser(user)
  //       .then((Response) => {
  //         console.log(Response, "User Registered successfully!!");
  //         alert(`User Registered successfully`);
  //         this.props.history.push("/");
  //       })
  //       .catch((error) => {
  //         console.log("Error", error.response);
  //         console.log(error.response.data.message, "User Registration failed");
  //         alert(error.response.data.message);
  //       });
  //   }
  // }

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
