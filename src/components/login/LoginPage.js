import React from 'react';
import './login.css'
import LoginForm from "./LoginForm";

const LoginPage = (props) => {
  return (
    <div className="main">
      <div className="container">
        <div className="order-content">
          <div className="order-image">
            <img className="order-img" src="http://localhost:3000/images/form-img.jpg" alt="order" />
          </div>
          <LoginForm {...props} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
