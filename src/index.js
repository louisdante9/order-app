import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Router from './Router';
import store from "./config/store";
import { verifyLogin } from './helpers/auth';

verifyLogin();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
