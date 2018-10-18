import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import welcome from './welcome';

const mapStateToProps = (state) => {

  return {
    currentUser: state["session"].id,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(welcome);
