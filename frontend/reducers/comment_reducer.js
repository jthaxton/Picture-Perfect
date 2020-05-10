import { merge } from 'lodash';
import {
  RECEIVE_ALL_COMMENTS,
} from '../actions/comment_actions';


const commentReducer = (oldstate = {}, action) => {
  Object.freeze(oldstate);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    default:
      return oldstate;
  }
};

export default commentReducer;
