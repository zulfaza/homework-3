import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function UserOnlyRoute({ component: Component, ...rest }) {
  const accessToken = useSelector((state) => state.spotify.accessToken);

  return (
    <Route
      {...rest}
      render={(props) => {
        return accessToken ? <Component {...props} /> : <Redirect to={"/"} />;
      }}
    ></Route>
  );
}
