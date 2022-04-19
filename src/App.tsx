import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import getQueryParams from './utils/getQueryParams';
import { updateAccessToken } from './redux/slice';
import UserOnlyRoute from './components/routes/UserOnlyRoute';
import GuestOnlyRoute from './components/routes/GuestOnlyRoute';
import Error404 from './pages/404';

type paramType = {
  [key: string]: string;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { access_token = null } = getQueryParams(window.location.hash) as paramType;
    if (access_token) dispatch(updateAccessToken(access_token));
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <UserOnlyRoute path="/create-playlist">
          <Home />
        </UserOnlyRoute>
        <GuestOnlyRoute exact path="/">
          <Login />
        </GuestOnlyRoute>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
