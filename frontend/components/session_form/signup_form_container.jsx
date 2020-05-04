import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, receiveNoErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up',
  navLink: <Link to="/signup">signup</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(receiveNoErrors()),
  processDemo: (user) => dispatch(login(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
