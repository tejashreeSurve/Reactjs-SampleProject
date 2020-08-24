import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../Component/Authentication.jsx";
export const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticate()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/restrictedAccess",
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
