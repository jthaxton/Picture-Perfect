import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from './profile_details';
import { fetchPictures } from '../../actions/picture_actions';
import { follow, follows } from '../../actions/follow_actions';
import CommentForm from "./comment_form.jsx";
import { comment } from "../../actions/comment_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        pictures: Object.values(state.entities.pictures),
        session: state.session,
        posts: state.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPictures()),
        fetchFollows: () => dispatch(follows()),
        createFollows: (user) => dispatch(follow(user)),
        createComment: (com) => dispatch(comment(com))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);