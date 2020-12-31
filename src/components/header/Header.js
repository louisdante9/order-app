import React from 'react';
import {Link} from "react-router-dom";
import { logOut } from '../../actions/loginAction'
import {useDispatch, useSelector} from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ userReducer }) => userReducer.isLoggedIn);

  const handleLogout = () => {
    dispatch(logOut(props.history));
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/orders">Order Manager</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          { isLoggedIn && <li className="nav-item active">
            <Link className="nav-link" to="/orders">Orders <span className="sr-only">(current)</span></Link>
          </li> }
          { !isLoggedIn && <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li> }
          { isLoggedIn && <li className="nav-item">
            <Link className="nav-link" to="#" onClick={ (event) => handleLogout(event) }>Logout</Link>
          </li> }
        </ul>
      </div>
    </nav>
  )
}

export default Header;
