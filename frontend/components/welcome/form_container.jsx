import { connect } from 'react-redux';
import Form from './form';

const mapStateToProps = ({ session, entities: { users } }) => {

  return {
    session: session
  };
};



export default connect(
  mapStateToProps

)(Form);
