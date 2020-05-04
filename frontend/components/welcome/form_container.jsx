import { connect } from 'react-redux';
import Form from './form';

const mapStateToProps = ({ session, entities: { users } }) => ({
  session,
});


export default connect(
  mapStateToProps,

)(Form);
