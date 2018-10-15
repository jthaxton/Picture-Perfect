import React from 'react';
import { Link } from 'react-router-dom';
import Form from './form';
import App2 from '../user_pages/app2'
// import logo from '../../../app/assets/images/fancy_dog.png'




const welcome = ({ currentUser, logout }) => {

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
      <button class="logout-button" onClick={logout}>Log Out</button>

    </h1>
    <App2 />
    </div>

  </div>

  );

  return currentUser ? personalWelcome() : sessionLinks();
};


export default welcome;
