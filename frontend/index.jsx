import React from 'react';
import ReactDOM from 'react-dom';
import {signup, signin, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Picture Perfect</h1>, root);
  window.signup = signup;
  window.signin = signin;
  window.logout = logout;
});
