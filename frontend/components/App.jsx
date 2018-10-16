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
import Profile from './user_pages/profile';
import ProfileDetails from './user_pages/profile_details';
import Splash from './splash/splash'
import SplashContainer from './splash/splash_container'
const App = ({currentUser}) => {

  return (
    <div>
      <Route exact path="/" component={WelcomeContainer, SplashContainer} />
      <Splash component={SplashContainer}/>
      <Route path="/profile" component={ProfileDetails}/>
      <Route path="/discover" component={Discover}/>
      <Route path="/licensing" component={Licensing}/>
      <Route path="/about" component={About}/>

    </div>
  )
}

export default App;
