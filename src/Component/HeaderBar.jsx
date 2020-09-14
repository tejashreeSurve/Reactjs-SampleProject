import React, { Component } from "react";
import { AppBar, Typography, Toolbar, Button, Link } from "@material-ui/core";
import { getAllUser } from "../Services/UserServices";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const HeaderBar = (props) => {
  const displayUserList = () => {
    props.history.push(`/headerbar/userList`);
  };
  const logout = () => {
    localStorage.removeItem("token");
    console.log("Successfully Logout");
    props.history.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className="appbarTitle">
          UserInfo
        </Typography>
        <Button colour="inherit" onClick={displayUserList}>
          {" "}
          List
        </Button>

        <Button colour="inherit" position="end" onClick={logout}>
          {" "}
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
