import React from 'react';
import LogInFormContainer from '../session_form/signin_form_container';
import SignUpFormContainer from '../session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link } from 'react-router-dom';
import Welcome from '../welcome/welcome'
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom';
import WelcomeContainer from '../welcome/welcome_container';
import {withRouter} from 'react-router-dom'

class Splash extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
    <div>
      <Route exact path="/" component={WelcomeContainer} />
    {typeof this.props.session.id === "undefined"  ? <div><div><img class="background-img" src="/background.jpeg"></img></div><div id='join-us'><Link id="join" to='/signup'>Join Us</Link></div></div> : null}
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
      {this.props.session.id > 0 ?
        <div id="logged-nav"><input id="search-bar" type="text" placeholder="Search for photos, location, or people">
        </input>
        <ul class="header-list">
          <li>
            <img src="/userpic.png" id="user-pic" class='badge'></img>
            <ul class='header-notifications'>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/upload'>Upload</Link></li>
            </ul>
          </li>
        </ul>
      </div> :
      <div id="auth-buttons">
        <div id="login-button">
          <Link to='/login' replace>Login</Link>
        </div>
        <div id="signup-button">
          <Link to='/signup'>Signup</Link>
        </div>
      </div>}
    </nav>

  </div>

  </div>
  </div>
)
  }
}
export default (Splash)
