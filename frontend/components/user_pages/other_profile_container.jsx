import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OtherProfile from './other_profile';
import { fetchOwnPicturesOffset, removePicture } from '../../actions/picture_actions';
import { updateProfpic } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  pictures: state.entities.pictures
});

const mapDispatchToProps = (dispatch) => ({
  deletePicture: (picture) => dispatch(removePicture(picture)),
  fetchPicturesOffset: (offset) => dispatch(fetchOwnPicturesOffset(offset))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OtherProfile));
