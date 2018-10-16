import * as ApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => dispatch => (
  ApiUtil.signin(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => {
  return ApiUtil.logout().then(user => dispatch(logoutCurrentUser()))
}

export const signup = (user) => dispatch => {
  return ApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))), err => (
    dispatch(receiveErrors(err.responseJSON))
  )
}

// actions
const receiveCurrentUser = (current_user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    current_user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,

  }
}

// args: array of errors
const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
