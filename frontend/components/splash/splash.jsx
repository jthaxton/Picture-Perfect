import React from 'react';
import {
  Link, Route, Redirect, Switch, HashRouter,
} from 'react-router-dom';
import LogInFormContainer from '../session_form/signin_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import WelcomeContainer from '../welcome/welcome_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={WelcomeContainer} session={this.props.session} />
        {typeof this.props.session.id !== 'number' ? (
          <div id="frontpage">
            <div id="bi">
              <img className="background-img" src="/background.jpeg" />
            </div>
            <div id="share">Share photos with artists like you!</div>
            <div id="join-us">
              <Link id="join" to="/signup">
                Join Us
              </Link>
            </div>
          </div>
        ) : null}
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
              {this.props.session.id > 0 ? (
                <div id="logged-nav">
                  <ul className="header-list">
                    <li>
                      <img src="/menu.png" id="user-menu" />

                      <ul className="header-notifications">
                        <li>
                          <Link to={`/users/${this.props.session.id}`}>Profile</Link>
                        </li>
                        <li>
                          <Link to="/" onClick={this.props.logout}>
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
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
      </div>
    );
  }
}
export default Splash;
