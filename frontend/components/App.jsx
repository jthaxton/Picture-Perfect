import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LogInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import WelcomeContainer from './welcome/welcome_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './welcome/welcome';
import About from './user_pages/about';
import Discover from './user_pages/discover';
import Licensing from './user_pages/licensing';
const App = ({currentUser}) => {

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
          {getState.session.id > 0 ? <div id="logged-nav"><input id="search-bar" type="text" placeholder="Search for photos, location, or people"></input><img src="/userpic.png" id="user-pic"></img></div> : null}

          <div id="auth-buttons">
            <div id="login-button">
              <Link to='/login'>Login</Link>
            </div>
            <div id="signup-button">
              <Link to='/signup'>Signup</Link>
            </div>
          </div>
        </nav>

      </div>

      </div>
      <Route path="/discover" component={Discover}/>
      <Route path="/licensing" component={Licensing}/>
      <Route path="/about" component={About}/>

    </div>
  )
}

export default App;
