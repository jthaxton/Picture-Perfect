import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from './profile_details';
import {fetchPictures} from '../../actions/picture_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    pictures: Object.values(state.entities.pictures)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPictures())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
