import React from 'react';
import Form from '../welcome/form'
import PostIndex from './postindex'
import Profile from './profile'

export default class App2 extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
  this.props.fetchPosts();
}

render() {
  return (
    <div id="test">
      <PostIndex posts={this.props.pictures} currentUser={this.props.currentUser}/>
    </div>
  );
}
};
