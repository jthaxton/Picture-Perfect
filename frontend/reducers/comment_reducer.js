import {
  RECEIVE_COMMENT,
  RECEIVE_ALL_COMMENTS
} from "../actions/comment_actions";
import { merge } from 'lodash';


const commentReducer = (oldstate = {}, action) => {
  Object.freeze(oldstate);
    switch (action.type) {
      case RECEIVE_COMMENT:
        return merge({}, oldstate, {
          [action.picture.id]: action.picture
        });

      case RECEIVE_ALL_COMMENTS:
        return action.comments;
      default:
        return oldstate;
    }
};

export default commentReducer;
