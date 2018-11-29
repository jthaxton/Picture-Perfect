import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from './profile_details';
import { fetchComments } from '../../actions/comment_actions';
import { follow, follows } from '../../actions/follow_actions';
import CommentIndex from "./comment_index.jsx";
import { comment } from "../../actions/comment_actions";

const mapStateToProps = (state) => {
    
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: () => dispatch(fetchComments())

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentIndex);