import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import getQueryParams from "./utils/getQueryParams";

import React from "react";
import { updateAccessToken } from "./redux/slice";

const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.spotify.accessToken);

  useEffect(() => {
    const { access_token = null } = getQueryParams(window.location.hash);
    if (access_token) dispatch(updateAccessToken(access_token));
  }, [dispatch]);

  if (accessToken)
    return (
      <div className="App">
        <Home />
      </div>
    );

  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
