import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from './profile_details';
import { fetchPictures } from '../../actions/picture_actions';

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
  currentUser: state.entities.users[state.session.id],
  pictures: Object.values(state.entities.pictures),
  session: state.session,
  size: size,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPictures()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
