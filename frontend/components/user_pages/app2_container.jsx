import { connect } from 'react-redux';
import App2 from './app2';
import { fetchPictures, removePicture } from '../../actions/picture_actions';
import { getFollows, makeFollow, deleteFollow } from '../../actions/follows_actions';
import { comment, comments } from '../../actions/comment_actions';
import { updateProfpic } from '../../actions/user_actions';

const mapStateToProps = (state, ownprops) => {
  return {
    currentUser: state.entities.users[state.session.id],
    pictures: state.entities.pictures,
    users: state.entities.users,

  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPictures()),
  deletePicture: (picture) => dispatch(removePicture(picture)),
  fetchFollows: () => dispatch(getFollows()),
  makeFollow: (follower, followee) => dispatch(makeFollow(follower, followee)),
  createComment: (com) => dispatch(comment(com)),
  fetchComments: () => dispatch(comments()),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  updateProfPic: (user, pic) => dispatch(updateProfpic(user, pic)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App2);
