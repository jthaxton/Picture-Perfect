import * as APIUtil from '../util/picture_api';

export const RECEIVE_PICTURES = "RECEIVE_PICTURES";

export const receivePictures = (pictures) => {
    return {
      type: RECEIVE_PICTURES,
      pictures
    }
}

export const fetchPictures = () => dispatch => {
  return APIUtil.fetchPosts().then(pictures => dispatch(receivePictures(pictures)));
}
