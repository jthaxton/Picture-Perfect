import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from './profile_details';
import  {fetchUser} from '../../actions/user_actions';
import OtherProfile from './other_profile';
import {fetchPictures} from '../../actions/picture_actions';
import {fetchAllUsers} from '../../actions/user_actions';

const mapStateToProps = (state, ownprops) => {
  return {
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    userId: ownprops.match.params.userId,
    user: state.entities.users[ownprops.match.params.userId],
    posts: Object.values(state.entities.pictures),
    session: state.session
};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPosts: () => dispatch(fetchPictures()),
    fetchUser: (id) => {
      return dispatch(fetchUser(id));
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProfile);
