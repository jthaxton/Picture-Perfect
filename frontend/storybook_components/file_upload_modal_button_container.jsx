import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FileUploadModalButton from './file_upload_modal_button';
import { uploadPost } from '../actions/picture_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  uploadPicture: (picture) => dispatch(uploadPost(picture)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FileUploadModalButton));
