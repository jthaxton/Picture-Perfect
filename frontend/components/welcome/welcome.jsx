import React from 'react';
import { Link } from 'react-router-dom';
import Form from './form';
import App2Container from '../user_pages/app2_container'
import {withRouter} from 'react-router-dom'






const welcome = ({ currentUser, logout }) => {
  let user
  user = currentUser
  const sessionLinks = () => (
    <nav class="login-signup">
      <Link to="/login"></Link>
      <Link to="/signup"></Link>
    </nav>
  );
  const personalWelcome = () => (
    <div>
      <div id="page-content">

    <h1 class="header-group">
      <h1 class="header-name">Welcome, {currentUser.username}!</h1>
    </h1>
    <App2Container />
    </div>
    
  </div>

  );

  return currentUser ? personalWelcome() : sessionLinks();
};


export default welcome;
