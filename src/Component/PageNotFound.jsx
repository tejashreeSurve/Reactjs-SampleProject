import React from "react";
import "../Css/RestrictedAccess.css";
import pageNotFound from "../Assets/pageNotFound.png";
const PageNotFound = () => {
  return (
    <div className="main-div">
      <h1>
        <img src={pageNotFound}></img>
        404
      </h1>
      <h3>Page not found!!!!</h3>
    </div>
  );
};

export default PageNotFound;
