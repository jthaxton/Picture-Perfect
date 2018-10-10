import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LogInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import WelcomeContainer from './welcome/welcome_container';


const App = () => {
  return (
    <div>
      <h1>Picture Perfect</h1>
      <Link to='/' className='header'>
      </Link>
      <Route path='/login' component={SignUpFormContainer} />
      <Route path='/signup' component={LogInFormContainer} />
    </div>
  )
}

export default App;
