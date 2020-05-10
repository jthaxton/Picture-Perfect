import * as APIUtil from '../util/user_api_util';
import * as picActs from './picture_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const fetchUser = (id) => (dispatch) => APIUtil.fetchUser(id).then((user) => (
  dispatch(receiveUser(user))
));

export const fetchAllUsers = () => (dispatch) => (
  APIUtil.fetchAllUsers().then((users) => (
    dispatch(receiveAllUsers(users))
  ))
);

export const updateProfpic = (picture) => (dispatch) => APIUtil.updateProfPic(picture).then(() => dispatch(updateUser(picture)))
  .then(() => dispatch(picActs.receivePictures()));

const updateUser = (user, picture) => ({
  type: UPDATE_USER,
  data: { user, picture },
});


const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users,
});
