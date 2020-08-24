import React, { Component } from "react";
import accessIcon from "../Assets/restictedAccess.png";
import "../Css/RestrictedAccess.css";
const RestrictedAccess = () => {
  return (
    <div className="main-div">
      <h1>
        <img src={accessIcon}></img>
        401
      </h1>
      <h3>You don't have permission to view this page !!!!</h3>
    </div>
  );
};

export default RestrictedAccess;
