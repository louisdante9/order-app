import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from './components/login/LoginPage';
import OrdersPage from './components/orders/OrdersPage';
import OrderDetailsPage from './components/orderDetails/OrderDetailsPage';
import { Auth } from './helpers/auth';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Auth(LoginPage)} />
      <Route exact path="/orders" component={Auth(OrdersPage)} />
      <Route path="/orders/:id" component={Auth(OrderDetailsPage)} />
      <Redirect to="/orders" />
    </Switch>
  </Router>
);

export default Routes;
