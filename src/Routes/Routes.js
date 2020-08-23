import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../Component/LoginForm.jsx";
import SignUpForm from "../Component/SignUpForm.jsx";
import User from "../Component/User.jsx";
import HeaderBar from "../Component/HeaderBar.jsx";
import EditUser from "../Component/EditUser.jsx";
import LoginContainer from "../Container/LoginContainer.jsx";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/registerUser">
          <SignUpForm />
        </Route>

        <Route path="/headerbar">
          <HeaderBar />
        </Route>
        <Route path="/headerbar/userList">
          <User />
        </Route>
        <Route path="/headerbar/user/:userId">
          <EditUser />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
