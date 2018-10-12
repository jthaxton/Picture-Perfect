import React from 'react';
import { Link } from 'react-router-dom';


const fetchPictures = () => {
  $.ajax({
    url: '/api/pictures',
    method: 'GET'
  }).then(pictures => {
    this.setState({pictures});
  });
}

const welcome = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav class="login-signup">
      <Link to="/login"></Link>
      <Link to="/signup"></Link>
    </nav>
  );
  const personalWelcome = () => (
    <hgroup class="header-group">
      <h1 class="header-name">Welcome, {currentUser.username}!</h1>
      <button class="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalWelcome() : sessionLinks();
};


export default welcome;
