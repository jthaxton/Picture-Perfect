import React from 'react';
import Form from '../welcome/form';
import PostIndex from './postindex';
import Profile from './profile';

export default class App2 extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
  this.props.fetchPosts();
  this.props.fetchComments();
  this.props.fetchFollows();
}


render() {
  
  return (
    <div id="test">
      <PostIndex deleteFollow={this.props.deleteFollow} pics={this.props.pics} updateProfPic={this.props.updateProfPic} fetchposts={this.props.fetchPosts} makeFollow={this.props.makeFollow} myFollows={this.props.myFollows} follows={this.props.follows} fetchFollows={this.props.fetchFollows} posts={this.props.pictures} currentUser={this.props.currentUser} deletePicture={this.props.deletePicture} users={this.props.users} comment={this.props.createComment} comments={this.props.fetchComments} com={this.props.comments} fetchUsers={this.props.fetchUsers}/>
    </div>
  );
}
}
