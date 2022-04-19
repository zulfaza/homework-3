import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'redux/store';

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}

export default AppProviders;
