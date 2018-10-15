import {RECEIVE_FOLLOW} from '../actions/follows_actions';
import {merge} from 'lodash';


const followsReducer = (oldstate ={}, actions) => {
  Object.freeze(oldstate);
  switch (actions.type) {
    case RECEIVE_FOLLOW:
      return merge({}, oldstate, {[actions.follow.id]: {[actions.current_user]: actions.user}})
    default:
      return oldstate;

  }
};

export default usersReducer;
