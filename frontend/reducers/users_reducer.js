import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS, UPDATE_USER } from '../actions/user_actions';


const usersReducer = (oldstate = {}, actions) => {
  Object.freeze(oldstate);
  switch (actions.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldstate, actions.current_user);
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_USER:
      return merge({}, oldstate, action.current_user);
    case UPDATE_USER:

      const newState = merge({}, oldstate, { [actions.data.user.id]: { prof_pic_id: actions.data.picture.id } });
      return newState;
    default:
      return oldstate;
  }
};

export default usersReducer;
