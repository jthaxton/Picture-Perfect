import {createFollow, fetchFollows} from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
const receiveFollow = (user) => {
  return {
    type: RECEIVE_FOLLOW,
    user
  }
}

const receiveAllFollows = () => {
  return {
    type: RECEIVE_ALL_FOLLOWS,
    user
  }
}

export const follow = (user) => dispatch => {
  return createFollow().then(user => dispatch(receiveFollow(user)))
}

export const follows = () => dispatch => {
  return fetchFollows().then(() => dispatch(receiveAllFollows()))
}
