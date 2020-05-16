import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchDiscoverPictures, fetchPicturesWithOffset, removePicture, fetchDiscoverWithOffset } from '../../actions/picture_actions';
import { Discover } from './discover.jsx';
import { comment } from '../../actions/comment_actions';
import { updateProfpic } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  pictures: state.entities.pictures,
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchDiscoverPosts: () => dispatch(fetchDiscoverPictures()),
  // fetchFollows: () => dispatch(getFollows()),
  makeFollow: (followee) => dispatch(makeFollow(followee)),
  createComment: (com) => dispatch(comment(com)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  deletePicture: (picture) => dispatch(removePicture(picture)),
  updateProfPic: (user, picture) => dispatch(updateProfpic(user, picture)),
  fetchPicturesOffset: (offset) => dispatch(fetchDiscoverWithOffset(offset))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Discover));
