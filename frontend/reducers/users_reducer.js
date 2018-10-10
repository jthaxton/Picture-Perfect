import {RECEIVE_CURRENT_USER} from '../util/session_api_util';

const usersReducer = (oldstate ={}, actions) => {
  Object.freeze(oldstate);
  switch (actions.type) {
    case RECEIVE_CURRENT_USER:
      merge({}, oldstate, {[actions.user.id]: actions.user})
    default:
      return oldstate;

  }
};

export default usersReducer;
