import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({ session }) => {
  return {
    session: session
  };
};



export default connect(
  mapStateToProps,
)(Splash);
