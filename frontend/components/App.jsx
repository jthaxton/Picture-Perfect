import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import ProfileContainer from './user_pages/profile_container';
import OtherProfileContainer from './user_pages/other_profile_container';
import FormContainer from './welcome/form_container';
import App2 from './user_pages/app2';
import PostIndexContainer from './user_pages/postindex_container';
import { NavigationBar } from '../storybook_components/navigation_bar';
import { logout } from '../actions/session_actions';

const App = ({ currentUser, logout }) => (
  <div>
    <NavigationBar currentUser={currentUser} logout={logout} />
    <Switch>
      <Route exact path="/profile" component={ProfileContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/" loggedIn={currentUser} component={PostIndexContainer} />
      <Route exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/users/:userId" component={OtherProfileContainer} />
      <Route exact path="/upload" component={FormContainer} />
    </Switch>
  </div>
);

const mapStateToProps = (state) => {
  const user = Object.values(state.entities.users)[0];
  return (
    { currentUser: user }
  );
};

const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
