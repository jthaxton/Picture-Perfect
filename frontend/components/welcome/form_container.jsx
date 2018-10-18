import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Form from './form';

const mapStateToProps = ({ session, entities: { users } }) => {

  return {
    session: session
  };
};



export default connect(
  mapStateToProps

)(Form);
