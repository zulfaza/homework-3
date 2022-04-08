import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import getQueryParams from "./utils/getQueryParams";

import React from "react";
import { updateAccessToken } from "./redux/slice";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserOnlyRoute from "./components/routes/UserOnlyRoute";
import GuestOnlyRoute from "./components/routes/GuestOnlyRoute";
import Error404 from "./pages/404";

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
          <UserOnlyRoute path="/create-playlist" component={Home} />
          <GuestOnlyRoute exact path="/" component={Login} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
