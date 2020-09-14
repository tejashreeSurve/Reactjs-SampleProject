import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate } from "../Component/isAuthenticate.jsx";
export const ProtectedRoutes = ({ component: Component, ...rest }) => {
  console.log("boolean", isAuthenticate());
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticate()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
