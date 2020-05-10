import React from 'react';
import SplashContainer from '../components/splash/splash_container';
import {Route, Link} from 'react-router-dom';

export const NavigationBar = ({currentUser, logout}) => {
  return (
<div id="stick">
          <div id="banner">
            <nav id="navbar">
              <div id="logo1">
                <a href="/">Picture</a>
              </div>
              <div id="logo2">
                <a href="/">Perfect</a>
              </div>
              <div id="other-nav" />
              {currentUser ? (
                <div id="logged-nav">
                  <ul className="header-list">
                    <li>
                      <img src="/menu.png" id="user-menu" />

                      <ul className="header-notifications">
                  <li>
                          <Link to={`/users/${currentUser.id}`}>Profile</Link>
                        </li>
                  <li>
                          <Link replace to="/" onClick={() => logout()}>
                            Logout
                          </Link>
                        </li>
                </ul>
                    </li>
                  </ul>
                  <div id="upload-link">
                    <Link to="/upload">Upload</Link>
                  </div>
                </div>
              ) : (
                <div id="auth-buttons">
                  <div id="login-button">
                    <Link to="/login" replace>
                Login
                    </Link>
                  </div>
                  <div id="signup-button">
                    <Link to="/signup">Signup</Link>
                  </div>
                </div>
              )}
            </nav>
            </div>
        </div>
  )
}