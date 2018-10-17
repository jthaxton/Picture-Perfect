import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from './profile_details';
import  fetchUser from '../../reducers/users_reducer';

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.picture.user_id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
