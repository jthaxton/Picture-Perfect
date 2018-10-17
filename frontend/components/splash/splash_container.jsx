import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({ session }) => {
  return {
    session: session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}


export default connect(
  mapStateToProps,mapDispatchToProps
)(Splash);
