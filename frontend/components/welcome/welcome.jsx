import React from 'react';
import { Link } from 'react-router-dom';
import Form from './form';
import App2Container from '../user_pages/app2_container';
import {withRouter} from 'react-router-dom';






const welcome = ({ currentUser, logout, users }) => {
  
  
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login"></Link>
      <Link to="/signup"></Link>
    </nav>
  );
  const personalWelcome = () => (
    <div>
      <div id="page-content">

    <div className="header-group">
      <h1 className="header-name">Welcome, {users[currentUser].username}!</h1>
    </div>
    <App2Container />
    </div>

  </div>

  );

  return currentUser ? personalWelcome() : sessionLinks();
};


export default welcome;
