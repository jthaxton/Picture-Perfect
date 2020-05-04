import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveNoErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }, ownprops) => ({
  errors: errors.session,
  formType: 'Login',
  navLink: <Link to="/login">sign up</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(receiveNoErrors()),
  processDemo: (user) => dispatch(login(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
