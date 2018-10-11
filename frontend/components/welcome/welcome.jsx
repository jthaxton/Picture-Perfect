import React from 'react';
import { Link } from 'react-router-dom';



const welcome = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalWelcome = () => (
    <hgroup className="header-group">
      <h1 className="header-name">Welcome, {currentUser.username}!</h1>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalWelcome() : sessionLinks();
};


export default welcome;
