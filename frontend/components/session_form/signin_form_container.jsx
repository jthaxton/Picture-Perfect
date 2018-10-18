import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import {receiveNoErrors} from '../../actions/session_actions';

const mapStateToProps = ({ errors }, ownprops) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/login">sign up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveNoErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
