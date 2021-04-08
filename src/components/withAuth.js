import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const { currentUser } = useAuth ()
  
    if (currentUser) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  };
  return AuthRoute;
};
export default withAuth;