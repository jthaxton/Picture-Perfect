import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import App2 from './app2';
import {fetchPictures, removePicture} from '../../actions/picture_actions';
import {fetchFollows, follow} from '../../actions/follows_actions';
import { comment, comments } from "../../actions/comment_actions";
const mapStateToProps = (state, ownprops) => {
  return {
    currentUser: state.entities.users[state.session.id],
    pictures: Object.values(state.entities.pictures),
    users: state.entities.users,
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPictures()),
    deletePicture: (picture) => dispatch(removePicture(picture)),
    fetchFollows: () => dispatch(follows()),
    createFollow: (follow) => dispatch(follow(follow)),
    createFollows: (user) => dispatch(follow(user)),
    createComment: (com) => dispatch(comment(com)),
    fetchComments: () => dispatch(comments())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App2);
