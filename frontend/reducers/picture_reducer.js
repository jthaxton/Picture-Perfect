import {RECEIVE_PICTURES} from '../actions/picture_actions';
import {merge} from 'lodash';

const pictureReducer = (state = {},action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_PICTURES:
      return action.pictures
    default:
      return state;
  }
}
export default pictureReducer;
