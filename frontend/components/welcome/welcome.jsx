import React from 'react';
import { Link } from 'react-router-dom';
import Form from './form';


const fetchPictures = () => {
  $.ajax({
    url: '/api/pictures',
    method: 'GET'
  }).then(setState({pictures}))
}

const welcome = ({ currentUser, logout, photoUrl }) => {
  const sessionLinks = () => (
    <nav class="login-signup">
      <Link to="/login"></Link>
      <Link to="/signup"></Link>
    </nav>
  );
  const personalWelcome = () => (
    <div>
    <hgroup class="header-group">
      <h1 class="header-name">Welcome, {currentUser.username}!</h1>
      <button class="header-button" onClick={logout}>Log Out</button>
    </hgroup>
    <Form />

  </div>

  );

  return currentUser ? personalWelcome() : sessionLinks();
};


export default welcome;
