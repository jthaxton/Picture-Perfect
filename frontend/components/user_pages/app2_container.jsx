import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import App2 from './app2';
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

export default connect(mapStateToProps, mapDispatchToProps)(App2);
