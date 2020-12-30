import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from './components/login/LoginPage';
import OrdersPage from './components/orders/OrdersPage';
import { Auth } from './helpers/auth';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Auth(LoginPage)} />
      <Route path="/orders" component={Auth(OrdersPage)} />
      <Redirect to="/orders" />
    </Switch>
  </Router>
);

export default Routes;
