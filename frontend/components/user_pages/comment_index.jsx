import React from 'react';
import { withRouter } from "react-router-dom";
import { comment } from "../../actions/comment_actions";
class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
            <div id="com-idx">
        {
        this.props.picture.comments.map(com => {
        return (
            <div>
            <div class="usrname">{com.user.username}</div>
            <div class="com-item">{com.comment}</div>
            </div>
        );
    })
    
        }
            </div>);
        
    }
}

export default withRouter(CommentIndex);