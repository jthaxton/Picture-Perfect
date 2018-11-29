import React from 'react';
import { withRouter } from "react-router-dom";
import { comment } from "../../actions/comment_actions";
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        
        return (
            <div id="com-idx">
        {
        this.props.picture.comments.map(com => {
        return <div class="com-posts">
            <div class="usrname">
              <Link to={`/users/${com.user.id}`} username={this.props.picture.user.username} follows={this.props.follows}>
                <div class="usrname">{com.user.username}</div>
              </Link>
            </div>
            {/* <div class="usrname">{com.user.username}</div> */}
            <div class="com-item">{com.comment}</div>
          </div>;
    })
    
        }
            </div>);
        
    }
}

export default withRouter(CommentIndex);