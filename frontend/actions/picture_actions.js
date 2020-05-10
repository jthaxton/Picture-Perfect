import * as APIUtil from '../util/picture_api';

export const RECEIVE_PICTURES = 'RECEIVE_PICTURES';
export const REMOVE_PICTURE = 'REMOVE_PICTURE';

export const receivePictures = (pictures) => ({
  type: RECEIVE_PICTURES,
  pictures,
});

export const receivePicture = (picture) => ({
  type: RECEIVE_PICTURES,
  picture,
});

export const deletePicture = (picture) => ({
  type: REMOVE_PICTURE,
  picture,
});

export const fetchPictures = () => (dispatch) => APIUtil.fetchPosts().then((pictures) => dispatch(receivePictures(pictures)));

export const fetchDiscoverPictures = () => (dispatch) => APIUtil.fetchDiscoverPosts().then((pictures) => dispatch(receivePictures(pictures)));


export const removePicture = (picture) => (dispatch) => APIUtil.deletePicture(picture).then((picture) => dispatch(deletePicture(picture)));

export const getPicture = (picture) => (dispatch) => APIUtil.getPicture(picture).then((picture).dispatch(receivePicture(picture)));
