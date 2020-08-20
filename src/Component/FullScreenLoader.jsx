import React, { Component } from "react";
import pageLoader from "../Assets/loader.gif";
import { connect } from "react-redux";
import { usePromiseTracker } from "react-promise-tracker";
import "../Css/FullScreenLoader.css";
const FullScreenLoader = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="loader-container">
        <div className="loader">
          <img src={pageLoader}></img>
        </div>
      </div>
    )
  );
};

export default FullScreenLoader;
