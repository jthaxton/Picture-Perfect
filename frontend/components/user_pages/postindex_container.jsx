import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPictures, removePicture, fetchPicturesWithOffset } from '../../actions/picture_actions';
import { PostIndex } from './postindex.jsx';
import { comment } from '../../actions/comment_actions';
import { updateProfpic } from '../../actions/user_actions';
let size;
function mediaQuery(x) {
  if (x.matches) { 
    size = 600;
  } else {
   size = 1080;
  }
}

let x = window.matchMedia("(max-width: 600px)")
mediaQuery(x) 
x.addListener(mediaQuery) 
const mapStateToProps = (state) => ({
  pictures: state.entities.pictures,
  currentUserId: state.session.id,
  size: size,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPictures()),
  makeFollow: (followee) => dispatch(makeFollow(followee)),
  createComment: (com) => dispatch(comment(com)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  deletePicture: (picture) => dispatch(removePicture(picture)),
  updateProfPic: (user, picture) => dispatch(updateProfpic(user, picture)),
  fetchPicturesOffset: (offset) => dispatch(fetchPicturesWithOffset(offset))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
