import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';


const usersReducer = (oldstate ={}, actions) => {
  Object.freeze(oldstate);
  switch (actions.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldstate, {[actions.current_user.id]: actions.current_user})
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldstate;

  }
};

export default usersReducer;
