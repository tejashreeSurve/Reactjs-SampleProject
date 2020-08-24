import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../Component/LoginForm.jsx";
import SignUpForm from "../Component/SignUpForm.jsx";
import User from "../Component/User.jsx";
import HeaderBar from "../Component/HeaderBar.jsx";
import EditUser from "../Component/EditUser.jsx";
import LoginContainer from "../Container/LoginContainer.jsx";
import PageNotFound from "../Component/PageNotFound.jsx";
import { ProtectedRoutes } from "./ProtectedRoutes.js";
import RestrictedAccess from "../Component/RestrictedAccess.jsx";
const Routes = () => {
  return (
    <Router>
      {/* <Switch>
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
      </Switch> */}
      <Route path="/" exact component={LoginForm} />
      <Route path="/registerUser" component={SignUpForm} />

      <ProtectedRoutes path="/headerBar" component={HeaderBar} />
      <ProtectedRoutes path="/headerBar/userList" component={User} />
      <ProtectedRoutes path="/headerBar/user/:userId" component={EditUser} />
      <Route path="/pageNotFound" component={PageNotFound} />
      <Route path="/restrictedAccess" component={RestrictedAccess} />
    </Router>
  );
};

export default Routes;
