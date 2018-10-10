import * as as ApiUtil from '../util/session_api_util';
// action types
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// thunk actions
const login = user => dispatch => {
  return {
    ApiUtil.signup(user).then(user => (
      dispatch(receiveCurrentUser(user))
      )
    )
  }
}

const logout = () => {
  return {
    ApiUtil.logout().then(user => (
      dispatch(logoutCurrentUser())
    )
  }
}

const signup = (user) => {
  return {
    ApiUtil.signup(user).then(user => (
      dispatch(receiveCurrentUser(user))
      )
    )
  }
}

// actions
const receiveCurrentUser = (current_user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
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
