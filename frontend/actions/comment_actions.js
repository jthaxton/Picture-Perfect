import {
  createComment,
  fetchComments,
  fetchAllComments,
} from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
// export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
const receiveComment = (picture) => ({
  type: RECEIVE_COMMENT,
  picture,
});

const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments,
});

export const comment = (com) => (dispatch) => createComment(com).then((picture) => dispatch(receiveComment(picture)));

export const comments = () => (dispatch) => fetchAllComments().then((comments) => dispatch(receiveAllComments(comments)));
