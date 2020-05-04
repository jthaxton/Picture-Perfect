import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (oldstate = {}, action) => {
  Object.freeze(oldstate);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.current_user.user.id };
    case LOGOUT_CURRENT_USER:
      return { id: null };
    default:
      return oldstate;
  }
};

export default sessionReducer;
