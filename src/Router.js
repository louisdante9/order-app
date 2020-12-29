import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect
} from "react-router-dom";
import LoginPage from './components/login/LoginPage';
import { Auth } from './helpers/auth';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Auth(LoginPage)} />
      {/*<Redirect to="/login" />*/}
    </Switch>
  </Router>
);

export default Routes
