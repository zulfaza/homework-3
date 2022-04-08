import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function GuestOnlyRoute({ component: Component, ...rest }) {
  const accessToken = useSelector((state) => state.spotify.accessToken);

  return (
    <Route
      {...rest}
      render={(props) => {
        return accessToken ? (
          <Redirect to={"/create-playlist"} />
        ) : (
          <Component {...props} />
        );
      }}
    ></Route>
  );
}
