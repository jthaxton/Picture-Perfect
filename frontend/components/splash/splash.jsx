import React from 'react';
import LogInFormContainer from '../session_form/signin_form_container';
import SignUpFormContainer from '../session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link } from 'react-router-dom';
import Welcome from '../welcome/welcome'
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom';
import WelcomeContainer from '../welcome/welcome_container';



export default class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <Route exact path="/" component={WelcomeContainer} />

    <div id="stick">
    <div id="banner">
    <AuthRoute path='/login' component={LogInFormContainer} />
    <AuthRoute path='/signup' component={SignUpFormContainer} />
    <nav id='navbar'>
      <div id="logo1">
        <Link to="/">Picture</Link>
      </div>
      <div id="logo2">
        <Link to="/">Perfect</Link>
      </div>
      <div id="other-nav">
        <div id="discover">
          <Link to="/discover">Discover</Link>
        </div>
        <div id="about">
          <Link to="/about">About</Link>
        </div>
        <div id="licensing">
          <Link to="/licensing">Licensing</Link>
        </div>

      </div>
      {getState.session.id > 0 ? <div id="logged-nav"><input id="search-bar" type="text" placeholder="Search for photos, location, or people"></input><img src="/userpic.png" id="user-pic"></img><Link to='/profile'>Profile</Link></div> : <div id="auth-buttons">
              <div id="login-button">
                <Link to='/login'>Login</Link>
              </div>
              <div id="signup-button">
                <Link to='/signup'>Signup</Link>
              </div>
            </div>}
    </nav>

  </div>

  </div>
  <Welcome/>
  </div>
)
  }
}
