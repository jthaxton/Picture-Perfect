import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const getUser = user => dispatch => (
  ApiUtil.fetchUser(user).then(user => (
    dispatch(receiveUser(user))
  )
)
)

   const receiveUser = (user) => {
    return {
      type: RECEIVE_USER,
      user
    }
  }
