import React from 'react';
import { Route, Link } from 'react-router-dom';
import SplashContainer from '../components/splash/splash_container';
import styled from 'styled-components';
import FileUploadModalButtonContainer from '../storybook_components/file_upload_modal_button_container';

const StyledFeedLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
  white-space: pre;
`;

export const NavigationBar = ({ currentUser, logout }) => (
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
          <>
          <StyledFeedLinks>
            <Link replace to="/discover">
              Discover
            </Link>
            <Link replace to="/">
              My Feed
            </Link>
          </StyledFeedLinks>
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
            <FileUploadModalButtonContainer/>
          </div>
          </>
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
);
