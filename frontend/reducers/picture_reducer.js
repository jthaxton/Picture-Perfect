import { merge } from 'lodash';
import { RECEIVE_PICTURES, REMOVE_PICTURE } from '../actions/picture_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const pictureReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PICTURES:
      return merge({}, state, action.pictures);
    case RECEIVE_USER:
      return action.user.pictures;
    case REMOVE_PICTURE:
      const newstate = merge({}, state);
      delete newstate[action.picture.id];
      return newstate;
    default:
      return state;
  }
};
export default pictureReducer;
