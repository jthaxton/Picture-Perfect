import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const UPDATE_USER = 'UPDATE_USER';

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

export const updateProfpic = (user, picture) => dispatch => {
  return APIUtil.updateProfPic(user.id, picture).then(() => dispatch(updateUser(user, picture)));
};

const updateUser = (user, picture) => {
  return {
    type: UPDATE_USER,
    data: {user, picture}
  };
};


   const receiveUser = (user) => {
    return {
      type: RECEIVE_USER,
      user
    };
  };

  const receiveAllUsers = (users) => {
    return {
      type: RECEIVE_ALL_USERS,
      users
    };
  };
