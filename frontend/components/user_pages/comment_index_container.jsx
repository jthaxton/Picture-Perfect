import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index.jsx';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: () => dispatch(fetchComments()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentIndex);
