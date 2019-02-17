import * as APIUtil from '../util/picture_api';
export const RECEIVE_PICTURES = "RECEIVE_PICTURES";
export const REMOVE_PICTURE = 'REMOVE_PICTURE';

export const receivePictures = (pictures) => {
    return {
      type: RECEIVE_PICTURES,
      pictures
    };
};

export const receivePicture = (picture) => {
  return {
    type: RECEIVE_PICTURES,
    picture
  };
};

export const deletePicture = (picture) => {
  return {
    type: REMOVE_PICTURE,
    picture
  };
};

export const fetchPictures = () => dispatch => {

  return APIUtil.fetchPosts().then(pictures => dispatch(receivePictures(pictures)));
};

export const removePicture = (picture) => dispatch => {
  return APIUtil.deletePicture(picture).then((picture) => dispatch(deletePicture(picture)));
};

export const getPicture = (picture) => dispatch => {
  return APIUtil.getPicture(picture).then((picture).dispatch(receivePicture(picture)));
};