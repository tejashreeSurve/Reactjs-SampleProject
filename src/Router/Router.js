import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "../Component/LoginForm.jsx";
import SignUpForm from "../Component/SignUpForm.jsx";
import User from "../Component/User.jsx";
import HeaderBar from "../Component/HeaderBar.jsx";
import EditUser from "../Component/EditUser.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginForm} />
      <Route path="/registerUser" component={SignUpForm} />

      <Route path="/headerbar" component={HeaderBar} />
      <Route path="/headerbar/userList" component={User} />
      <Route path="/headerbar/user/:userId" component={EditUser} />
    </BrowserRouter>
  );
};

export default Router;
