import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import store from "./redux/store";
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
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );

  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
};

export default App;
