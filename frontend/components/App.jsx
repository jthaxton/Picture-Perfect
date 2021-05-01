import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Button, Input, DialogTitle, InputLabel, makeStyles, Box, AppBar, Typography } from '@material-ui/core';
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
import styled from 'styled-components';
import DiscoverContainer from '../components/user_pages/discover_container'
import FileUploadModalButtonContainer from '../storybook_components/file_upload_modal_button_container';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  background: aliceblue
  padding: "5vw
`;

const useStyles = makeStyles({
  loggedInContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "25%"
  },
  container: {
    display: "flex",
    justifyContent: "center",
  }
})

const App = ({ currentUser, logout }) => {
  const classes = useStyles();
  return (
  <StyledDiv>
    {currentUser && <NavigationBar currentUser={currentUser} logout={logout} />}
    <Box className={currentUser ? classes.loggedInContainer : classes.container}>
      <Switch>
        <Route exact path="/profile" component={ProfileContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/" loggedIn={currentUser} component={PostIndexContainer} />
        <ProtectedRoute exact path="/discover" loggedIn={currentUser} component={DiscoverContainer} />
        <Route exact path="/" component={SplashContainer} />
        <ProtectedRoute exact path="/users/:userId" component={OtherProfileContainer} />
        <Route exact path="/upload" component={FormContainer} />
      </Switch>
      {currentUser && <FileUploadModalButtonContainer/>}
    </Box>
  </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  const user = Object.values(state.entities.users)[0];
  return (
    { currentUser: user }
  );
};

const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
