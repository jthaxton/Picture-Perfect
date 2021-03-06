import { merge } from 'lodash';
import { RECEIVE_FOLLOW, RECEIVE_ALL_FOLLOWS, REMOVE_FOLLOW } from '../actions/follows_actions';


const followsReducer = (oldstate = {}, actions) => {
  Object.freeze(oldstate);
  console.log(actions)
  switch (actions.type) {
    case RECEIVE_FOLLOW:
      return merge({}, oldstate, { [actions.followee.id]: actions.followee });
    case RECEIVE_ALL_FOLLOWS:
      return merge({}, oldstate, {follows: actions.follow});
    case REMOVE_FOLLOW:
      const newstate = merge({}, oldstate);
      delete newstate[actions.follow.id];
      return newstate;
    default:
      return oldstate;
  }
};

export default followsReducer;
