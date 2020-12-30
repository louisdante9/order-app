import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './login.css'
import { login } from "../../actions/loginAction";

const LoginForm = ({ history }) => {
  const [email, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(login({ email, password }, history));
  }

  return (
    <div className="order-form">
      <form id="order-form" onSubmit={handleSubmit}>
        <h2>Login to manage your orders!</h2>
        <div className="form-group form-input">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={e => setUserEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className="form-label"
          >
            Email
          </label>
        </div>
        <div className="form-group form-input">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className="form-label"
          >
            Password
          </label>
        </div>
        <div className="form-radio">
        </div>

        <div className="form-submit">
          <input
            type="submit"
            value="Login"
            className="submit"
            id="submit"
            name="submit"
          />
          <a href="http://localhost:3000" className="vertify-order">Don't have an account? Register</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
