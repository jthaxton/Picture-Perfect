import { connect } from 'react-redux';
import { fetchPictures } from '../../actions/picture_actions';
import { makeFollow, getFollows, deleteFollow } from '../../actions/follow_actions';
import PostIndex from './postindex.jsx';
import { comment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  const result = {};
  const keys = Object.keys(state.entities.follows);
  const currentUser = state.entities.users[state.session.id];
  for (let index = 0; index < keys.length; index++) {
    if (state.entities.follows[keys[index]].follower_id == currentUser.id) {
      result[state.entities.follows[keys[index]].followee_id] = keys[index];
    }
  }
  return {
    currentUser: state.entities.users[state.session.id],
    pictures: Object.values(state.entities.pictures),
    session: state.session,
    posts: state.posts,
    com: state.comments,
    myFollows: result,

  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPictures()),
  fetchFollows: () => dispatch(getFollows()),
  makeFollow: (followee) => dispatch(makeFollow(followee)),
  createComment: (com) => dispatch(comment(com)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
