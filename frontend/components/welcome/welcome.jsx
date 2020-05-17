import React from 'react';
import { Link } from 'react-router-dom';
import Form from './form';
import PostIndexContainer from '../user_pages/postindex_container';

const welcome = ({ currentUser, logout, users }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" />
      <Link to="/signup" />
    </nav>
  );
  const personalWelcome = () => (
    <div>
      <div id="page-content">

        <div className="header-group">
          <h1 className="header-name">
            Welcome,
            {users[currentUser].username}
            !
          </h1>
        </div>
        {/* <PostIndexContainer /> */}
      </div>

    </div>

  );

  return currentUser ? personalWelcome() : sessionLinks();
};


export default welcome;
