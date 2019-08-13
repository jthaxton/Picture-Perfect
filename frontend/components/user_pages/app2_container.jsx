import { connect } from 'react-redux';
import App2 from './app2';
import {fetchPictures, removePicture} from '../../actions/picture_actions';
import {getFollows, makeFollow, deleteFollow} from '../../actions/follows_actions';
import { comment, comments } from "../../actions/comment_actions";
import {updateProfpic} from "../../actions/user_actions";
import { fetchAllUsers } from '../../util/user_api_util';

const mapStateToProps = (state, ownprops) => {
  let result = {};
  let keys = Object.keys(state.entities.follows);
  let currentUser = state.entities.users[state.session.id];
  for (let index = 0; index < keys.length; index++) {
    if (state.entities.follows[keys[index]].follower_id == currentUser.id) {
      result[state.entities.follows[keys[index]].followee_id] =  keys[index];
    }
    
  }
  let posts ;
  posts = state.entities.pictures;
  
  return {
    currentUser: state.entities.users[state.session.id],
    pictures: Object.values(posts),
    users: state.entities.users,
    comments: state.entities.comments,
    follows: state.entities.follows,
    myFollows: result,
    pics: posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPictures()),
    deletePicture: (picture) => dispatch(removePicture(picture)),
    fetchFollows: () => dispatch(getFollows()),
    makeFollow: (follower, followee) => dispatch(makeFollow(follower, followee)),
    createComment: (com) => dispatch(comment(com)),
    fetchComments: () => dispatch(comments()),
    deleteFollow: (follow) => dispatch(deleteFollow(follow)),
    updateProfPic: (user, pic) => dispatch(updateProfpic(user, pic)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App2);
