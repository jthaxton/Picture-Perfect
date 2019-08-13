import React from 'react';
import {Route} from 'react-router-dom';
import LogInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import ProfileContainer from './user_pages/profile_container';
import OtherProfileContainer from './user_pages/other_profile_container';
import FormContainer from './welcome/form_container';
const App = ({currentUser}) => {
  return (
    <div>
      <Route path="/profile" component={ProfileContainer}/>
      {/* <Route path="/discover" component={Discover}/> */}
      {/* <Route path="/licensing" component={Licensing}/> */}
      {/* <Route path="/about" component={About}/> */}
      <AuthRoute path="/login" component={LogInFormContainer}/>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <Route exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/users/:userId" component={OtherProfileContainer}/>
      <Route path="/upload" component={FormContainer}/>

    </div>
  );
};

export default App;
