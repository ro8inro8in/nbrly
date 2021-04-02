import React from "react";
import { Redirect } from "react-router-dom";
const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const isAuth = !!localStorage.getItem("token");
    if (isAuth) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  };
  return AuthRoute;
};
export default withAuth;