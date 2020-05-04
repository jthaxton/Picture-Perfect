import { createFollow, fetchFollows, unFollow } from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = (followee) => ({
  type: RECEIVE_FOLLOW,
  followee,
});

const receiveAllFollows = (follows) => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows,
});

const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow,
});

export const makeFollow = (followee) => (dispatch) => createFollow(followee).then((followee) => dispatch(receiveFollow(followee)));

export const getFollows = () => (dispatch) => fetchFollows().then((follows) => dispatch(receiveAllFollows(follows)));

export const deleteFollow = (follow) => (dispatch) => unFollow(follow).then((follow) => dispatch(removeFollow(follow)));
