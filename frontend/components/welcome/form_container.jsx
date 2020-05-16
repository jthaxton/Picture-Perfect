import { connect } from 'react-redux';
import Form from './form';
import { withRouter } from 'react-router-dom';
import { uploadPost } from '../../actions/picture_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
  session,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchDiscoverPosts: () => dispatch(fetchDiscoverPictures()),
  // // fetchFollows: () => dispatch(getFollows()),
  // makeFollow: (followee) => dispatch(makeFollow(followee)),
  // createComment: (com) => dispatch(comment(com)),
  // deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  uploadPicture: (picture) => dispatch(uploadPost(picture)),
  // updateProfPic: (user, picture) => dispatch(updateProfpic(user, picture)),

});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Form));
