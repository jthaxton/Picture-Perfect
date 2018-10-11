import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LogInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import WelcomeContainer from './welcome/welcome_container';


const App = () => {
  return (
    <div>
        <div id="banner">
        <Route path='/login' component={LogInFormContainer} />
        <Route path='/signup' component={SignUpFormContainer} />
        <nav id='navbar'>
          <div id="logo">
            PicturePerfect
          </div>
          <div id="other-nav">
            <div id="discover">
              Discover
            </div>
            <div id="about">
              About
            </div>
            <div id="licensing">
              Licensing
            </div>
          </div>
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
  )
}

export default App;
