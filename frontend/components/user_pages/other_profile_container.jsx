import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OtherProfile from './other_profile';
import { fetchOwnPicturesOffset, removePicture } from '../../actions/picture_actions';

let size;
function mediaQuery(x) {
  if (x.matches) { 
    size = 600;
  } else {
   size = 1080;
  }
}

let x = window.matchMedia("(max-width: 600px)")
mediaQuery(x) 
x.addListener(mediaQuery) 

const mapStateToProps = (state) => ({
  pictures: state.entities.pictures,
  size: size,
});

const mapDispatchToProps = (dispatch) => ({
  deletePicture: (picture) => dispatch(removePicture(picture)),
  fetchPicturesOffset: (offset) => dispatch(fetchOwnPicturesOffset(offset))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OtherProfile));
