import React, { Component } from "react";
import { getUser, update } from "../Services/UserServices";
import {
  Card,
  TextField,
  CardContent,
  Avatar,
  Button,
} from "@material-ui/core";
import "../Css/EditUser.css";
import { editUser } from "../Services/UserServices";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
      fName: "",
      mName: "",
      lName: "",
      userEmail: "",
      password: "",
      isVerified: "",
      errors: {},
    };
    this.showUser = this.showUser.bind(this);
  }

  axios = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  componentDidMount() {
    this.showUser();
  }
  showUser() {
    console.log("hello");
    console.log(this.state.userId);
    var userToken = localStorage.getItem("token");
    let userid = this.state.userId;
    getUser(userid, userToken).then((response) => {
      console.log(response.data.data.fName);
      this.setState({
        fName: response.data.data.fName,
        mName: response.data.data.mName,
        lName: response.data.data.lName,
        userEmail: response.data.data.userEmail,
        password: response.data.data.password,
        isVerified: response.data.data.isVerified,
      });
    });
  }

  validateForm = () => {
    let errors = {};
    let formIsValidate = true;
    if (!this.state.fName) {
      errors["fName"] = "*enter first Name";
      formIsValidate = false;
    }
    if (!this.state.mName) {
      errors["mName"] = "*enter Middle Name";
      formIsValidate = false;
    }
    if (!this.state.lName) {
      errors["lName"] = "*enter Last Name";
      formIsValidate = false;
    }

    this.setState({
      errors: errors,
    });
    return formIsValidate;
  };

  updateUser() {
    if (this.validateForm()) {
      let user = {};
      var token = localStorage.getItem("token");
      user.userId = this.state.userId;
      user.fName = this.state.fName;
      user.mName = this.state.mName;
      user.lName = this.state.lName;
      user.userEmail = this.state.userEmail;
      user.password = this.state.password;
      user.isVerified = this.state.isVerified;
      console.log(user);

      editUser(this.state.userId, user, token)
        .then((response) => {
          console.log(response);
          alert(`User is successfully  update !!!`);
          this.props.history.push("/headerbar/userList");
        })
        .catch((error) => {
          console.log("Error", error.message);
          console.log(error.response.data.message, "User Registration failed");
          alert(error.response.data.message);
        });
    }
  }

  render() {
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
                value={this.state.userId}
                onChange={this.axios}
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
                value={this.state.fName}
                onChange={this.axios}
                error={this.state.errors.fName}
                helperText={this.state.errors.fName}
              ></TextField>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth="true"
                id="middlename"
                label="Middle Name"
                name="mName"
                value={this.state.mName}
                onChange={this.axios}
                error={this.state.errors.mName}
                helperText={this.state.errors.mName}
              ></TextField>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth="true"
                id="lastname"
                label="Last Name"
                name="lName"
                value={this.state.lName}
                onChange={this.axios}
                error={this.state.errors.lName}
                helperText={this.state.errors.lame}
              ></TextField>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth="true"
                id="email"
                label="Email Address"
                name="userEmail"
                value={this.state.userEmail}
                onChange={this.axios}
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
                value={this.state.password}
                type="password"
                onChange={this.axios}
                disabled
              ></TextField>

              <Button
                className="signup"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => this.updateUser()}
              >
                Update
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default EditUser;
