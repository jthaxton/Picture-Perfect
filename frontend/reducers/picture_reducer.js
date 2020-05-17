import { merge } from 'lodash';
import { RECEIVE_PICTURES, REMOVE_PICTURE } from '../actions/picture_actions';
import { RECEIVE_USER, UPDATE_USER } from '../actions/user_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const pictureReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PICTURES:
      return merge({}, action.pictures);
    case RECEIVE_USER:
      return action.user.pictures;
    case REMOVE_PICTURE:
      const newstate = merge({}, state, action.picture);
      return newstate;
    case RECEIVE_COMMENT:
      const copiedState = { ...state };
      const pictureIdx = state.followed_pictures.findIndex((picture) => picture.id === action.picture.id);
      copiedState.followed_pictures[pictureIdx] = action.picture;
      return merge({}, state, copiedState);
    case UPDATE_USER:
      return merge({}, state, action.pictures);
    default:
      return state;
  }
};
export default pictureReducer;
