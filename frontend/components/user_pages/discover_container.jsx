import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchDiscoverPictures, removePicture, fetchDiscoverWithOffset } from '../../actions/picture_actions';
import { Discover } from './discover.jsx';
import { comment } from '../../actions/comment_actions';
import { updateProfpic } from '../../actions/user_actions';
import { deleteFollow, makeFollow } from '../../actions/follows_actions'

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
  fetchDiscoverPosts: () => dispatch(fetchDiscoverPictures()),
  createFollow: (followee) => dispatch(makeFollow(followee)),
  createComment: (com) => dispatch(comment(com)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  deletePicture: (picture) => dispatch(removePicture(picture)),
  updateProfPic: (user, picture) => dispatch(updateProfpic(user, picture)),
  fetchPicturesOffset: (offset) => dispatch(fetchDiscoverWithOffset(offset))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Discover));
