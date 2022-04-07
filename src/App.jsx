import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import getQueryParams from "./utils/getQueryParams";

import React from "react";
import { updateAccessToken } from "./redux/slice";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { access_token = null } = getQueryParams(window.location.hash);
    if (access_token) dispatch(updateAccessToken(access_token));
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-playlist" component={Home}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
