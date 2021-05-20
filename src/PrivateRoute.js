import React from "react";
import { useStateValue } from "./redux/StateProvider";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [{ user }] = useStateValue();
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? <RouteComponent {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
