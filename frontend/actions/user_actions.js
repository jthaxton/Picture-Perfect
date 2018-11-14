import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchUser = id => dispatch => {

  return APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  )
);
};

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers().then((users) => (
    dispatch(receiveAllUsers(users))
  ))
);

   const receiveUser = ({follows, pictures, user}) => {
    return {
      type: RECEIVE_USER,
      user, pictures, follows
    };
  };

  const receiveAllUsers = (users) => {
    return {
      type: RECEIVE_ALL_USERS,
      users
    };
  };
