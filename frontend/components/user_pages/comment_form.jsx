import React from 'react';
import { withRouter } from "react-router-dom";
import { comment } from "../../actions/comment_actions";
class CommentForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        comment: ''
    };
    this.handleComment = this.handleComment.bind(this);
    }

    handleComment(e) {
        e.preventDefault();
        const formData = new FormData();
        const com = ({
            comment: this.state.comment,
            picture_id: this.props.picture_id,
            user_id: this.props.currentUser
        });

        // formData.append('comment[comment]', com.comment);
        // formData.append('comment[user_id]', com.currentUser);
        // formData.append('comment[picture_id]', com.picture_id);
        this.props.comment(com).then(() => this.setState({comment: ''}));
        this.props.fetchposts().then((pictures) => this.setState(pictures));
        // this.props.history.push('/');
    }

    render() {
        
        return (
            <form onSubmit={this.handleComment} class="com-form">
                <input type="text" name="comment" id="comment" placeholder="Write a comment..." value={this.state.comment} onChange={(e) => this.setState({comment: e.currentTarget.value})} />
            </form>
        );
    }
}

export default CommentForm;