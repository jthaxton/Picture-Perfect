import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';
import {RECEIVE_USER, RECEIVE_ALL_USERS} from '../actions/user_actions';


const usersReducer = (oldstate ={}, actions) => {
  
  Object.freeze(oldstate);
  switch (actions.type) {
    case RECEIVE_CURRENT_USER:
    return merge({}, oldstate, {[actions.current_user.user.id]: actions.current_user.user})
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_USER:
      return merge({}, oldstate, {[actions.user.id]:actions.user});
    default:
      return oldstate;

  }
};

export default usersReducer;
