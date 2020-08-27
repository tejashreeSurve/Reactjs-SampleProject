import React, { useReducer } from "react";

class Authentication {
  constructor() {
    this.authenticated = false;
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticate() {
    return this.authenticated;
  }
}

export default new Authentication();
