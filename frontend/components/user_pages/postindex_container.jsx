import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPictures, removePicture, fetchPicturesWithOffset } from '../../actions/picture_actions';
// import { makeFollow, getFollows, deleteFollow } from '../../actions/follow_actions';
import { PostIndex } from './postindex.jsx';
import { comment } from '../../actions/comment_actions';
import { updateProfpic } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  pictures: state.entities.pictures,
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPictures()),
  // fetchFollows: () => dispatch(getFollows()),
  makeFollow: (followee) => dispatch(makeFollow(followee)),
  createComment: (com) => dispatch(comment(com)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  deletePicture: (picture) => dispatch(removePicture(picture)),
  updateProfPic: (user, picture) => dispatch(updateProfpic(user, picture)),
  fetchPicturesOffset: (offset) => dispatch(fetchPicturesWithOffset(offset))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
