import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import welcome from './welcome';
import { comment } from  "../../actions/comment_actions";

const mapStateToProps = (state) => {

  return {
    currentUser: state["session"].id,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createComment: () => dispatch(comment())
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(welcome);
