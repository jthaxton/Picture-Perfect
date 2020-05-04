import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="com-idx">
        {
        this.props.picture.comments.map((com) => (
          <div key={com.id} className="com-posts">
            <div className="usrname">
              <Link to={`/users/${com.user.id}`} username={this.props.picture.user.username} follows={this.props.follows}>
                <div className="usrname">{com.user.username}</div>
              </Link>
            </div>
            <div className="com-item">{com.comment}</div>
          </div>
        ))

        }
      </div>
    );
  }
}

export default withRouter(CommentIndex);
