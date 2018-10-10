import React from 'react';
import ReactDOM from 'react-dom';
import {signup, signin, logout, login} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
// import * as actions from './actions/session_actions';




document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});
