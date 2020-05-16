import { connect } from 'react-redux';
import Form from './form';
import { withRouter } from 'react-router-dom';
import { uploadPost } from '../../actions/picture_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
  session,
});

const mapDispatchToProps = (dispatch) => ({
  uploadPicture: (picture) => dispatch(uploadPost(picture)),
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Form));
