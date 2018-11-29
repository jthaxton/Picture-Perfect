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
}


render() {
  
  return (
    <div id="test">
      <PostIndex fetchposts={this.props.fetchPosts} follow={this.props.createFollow} follows={this.props.follows} posts={this.props.pictures} currentUser={this.props.currentUser} deletePicture={this.props.deletePicture} users={this.props.users} comment={this.props.createComment} comments={this.props.fetchComments} com={this.props.comments}/>
    </div>
  );
}
}
