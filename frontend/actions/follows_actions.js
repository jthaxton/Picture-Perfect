import {createFollow} from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

const receiveFollow = (user) => {
  return {
    type: RECEIVE_FOLLOW,
    user
  }
}

export const follow = (user) => dispatch => {
  return createFollow().then(user => dispatch(receiveFollow(user)))
}
