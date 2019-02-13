import {RECEIVE_FOLLOW, RECEIVE_ALL_FOLLOWS, REMOVE_FOLLOW} from '../actions/follows_actions';
import {merge} from 'lodash';


const followsReducer = (oldstate ={}, actions) => {
  Object.freeze(oldstate);
  switch (actions.type) {
    case RECEIVE_FOLLOW:
      return merge({}, oldstate, {[actions.followee.id]: actions.followee});
    case RECEIVE_ALL_FOLLOWS:
      return merge({}, oldstate, actions.follows);
    case REMOVE_FOLLOW:
      let newstate = merge({}, oldstate);
      delete newstate[actions.follow.id];
      return newstate;
    default:
      return oldstate;
  }
};

export default followsReducer;
