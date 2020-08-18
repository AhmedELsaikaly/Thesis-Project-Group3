import React from "react";
import { Route, Redirect } from "react-router-dom";

const authintication = {
  isLoggedIn: false,
  onAuthintication() {
    this.isLoggedIn = true;
  },
  ofAuthintication() {
    this.isLoggedIn = false;
  },
  getLoginStatus() {
    return this.isLoggedIn;
  },
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.usertoken !== undefined ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signIn" />
      )
    }
  />
);
const ProtectedRouteOwner = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
        localStorage.ownertoken !== undefined  ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signIn" />
      )
    }
  />
);

export { authintication, ProtectedRoute, ProtectedRouteOwner };
