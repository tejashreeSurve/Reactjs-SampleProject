import React, { useReducer } from "react";
import AuthReducer, { initialState } from "../ReduxConnection/AuthReducer.jsx";
// const Authentication = () => {
//   const [state, dispatch] = useReducer(AuthReducer, initialState);
//   const { authenticated } = state;
//   const login = (cb) => {
//     dispatch({
//       type: "AUTH_USER",
//       payload: true,
//     });
//     cb();
//   };
//   const logout = (cb) => {
//     dispatch({
//       type: "AUTH_USER",
//       payload: false,
//     });
//     console.log("In auth comp", authenticated);
//     cb();
//   };

//   const isAuthenticate = () => {
//     return authenticated;
//   };
// };

// export default Authentication;

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
