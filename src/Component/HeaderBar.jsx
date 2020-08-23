import React, { Component } from "react";
import { AppBar, Typography, Toolbar, Button, Link } from "@material-ui/core";
import { getAllUser } from "../Services/UserServices";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userListArray: [],
    };
  }
  logout = () => {
    localStorage.removeItem("token");
    console.log("Successfully Logout");
    return <Redirect to="/" />;
  };

  // () => this.props.history.push("/userList")}
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className="appbarTitle">
            UserInfo
          </Typography>
          <Button
            colour="inherit"
            onClick={() => this.props.history.push(`/headerbar/userList`)}
          >
            {" "}
            List
          </Button>

          <Button colour="inherit" position="end" onClick={this.logout}>
            {" "}
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default HeaderBar;
