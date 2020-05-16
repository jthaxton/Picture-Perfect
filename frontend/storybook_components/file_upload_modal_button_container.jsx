import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FileUploadModalButton from './file_upload_modal_button';
import { uploadPost } from '../actions/picture_actions';

let size;
function mediaQuery(x) {
  if (x.matches) { 
    size = "small";
  } else {
   size = "large";
  }
}

let x = window.matchMedia("(max-width: 700px)")
mediaQuery(x) 
x.addListener(mediaQuery) 
const mapStateToProps = (state) => ({
  size: size,
});

const mapDispatchToProps = (dispatch) => ({
  uploadPicture: (picture) => dispatch(uploadPost(picture)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FileUploadModalButton));
