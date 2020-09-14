import React, { useEffect, useReducer } from "react";
import { getUser, update } from "../Services/UserServices";
import { Card, TextField, CardContent, Button } from "@material-ui/core";
import "../Css/EditUser.css";
import { editUser } from "../Services/UserServices";
import { useDispatch, useSelector } from "react-redux";
import EditReducer, { initialState } from "../ReduxConnection/EditReducer.jsx";
import * as Yup from "yup";
import {
  getUserById,
  setFname,
  setFnameError,
  setIsverified,
  setLname,
  setLnameError,
  setMname,
  setMnamesError,
  setPassword,
  setUserEmail,
} from "../Action/EditAction.jsx";

const EditUser = (props) => {
  const [state, dispatch] = useReducer(EditReducer, initialState);
  const reduxResult = useSelector((state) => state);
  const { userListData, userDetails } = reduxResult;
  const reduxDispatch = useDispatch();
  const {
    userid,
    fname,
    mname,
    lname,
    useremail,
    password,
    isverified,
    fnameerror,
    mnameerror,
    lnameerror,
  } = state;

  initialState.userid = props.match.params.userId;
  console.log("Edit user", state);
  const axios = (event) => {
    dispatch({
      type: `SET_${event.target.name.toUpperCase()}`,
      payload: event.target.value,
    });
  };

  useEffect(() => {
    showUser();
  }, []);
  const showUser = () => {
    console.log("hello");
    console.log(userid);
    const userToken = localStorage.getItem("token");
    let userId = state.userid;
    console.log("userId", state.userid);
    let editVariables = {};

    editVariables.userId = userId;
    editVariables.userToken = userToken;
    editVariables.dispatch = dispatch;
    reduxDispatch(getUserById(editVariables));
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is Required"),
    mname: Yup.string().required("Middle Name is Required"),
    lname: Yup.string().required("Last Name is Required"),
  });

  const updateUser = () => {
    validationSchema
      .validate({ fname, mname, lname }, { abortEarly: false })
      .then(() => {
        let user = {};
        var token = localStorage.getItem("token");
        user.userId = userid;
        user.fName = fname;
        user.mName = mname;
        user.lName = lname;
        user.userEmail = useremail;
        user.password = password;
        user.isVerified = isverified;
        console.log(user);
        editUser(userid, user, token)
          .then((response) => {
            console.log(response);
            alert(`User is successfully  update !!!`);
            props.history.push("/headerbar/userList");
          })
          .catch((error) => {
            console.log("Error", error.message);
            console.log(
              error.response.data.message,
              "User Registration failed"
            );
            alert(error.response.data.message);
          });
      })
      .catch((error) => {
        error.inner.forEach((element) => {
          if (element.path === "fname") {
            dispatch(setFnameError(element.message));
            console.log(element.message);
          }
          if (element.path === "mname") {
            dispatch(setMnamesError(element.message));
            console.log(element.message);
          }
          if (element.path === "lname") {
            dispatch(setLnameError(element.message));
            console.log(element.message);
          }
        });
      });
  };
  return (
    <div>
      <Card className="updateForm">
        <CardContent>
          <h4>Update Form</h4>
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userId"
              label="user Id"
              name="userId"
              value={userid}
              onChange={axios}
              disabled
            ></TextField>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="fName"
              value={fname}
              onChange={axios}
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
              value={mname}
              onChange={axios}
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
              value={lname}
              onChange={axios}
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
              value={useremail}
              onChange={axios}
              disabled
            ></TextField>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth="true"
              id="email"
              label="Password"
              name="password"
              value={password}
              type="password"
              onChange={axios}
              disabled
            ></TextField>

            <Button
              className="signup"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => updateUser()}
            >
              Update
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditUser;
