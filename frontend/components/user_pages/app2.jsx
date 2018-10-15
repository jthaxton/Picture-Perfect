import React from 'react';
import Form from '../welcome/form'
import PostIndex from './postindex'

export default class App2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

   fetchPosts() {
     return $.ajax({
      url: "/api/pictures",
      method: "GET"
    }).then(posts => {
      this.setState({posts});
    })
  };

  componentDidMount() {
  this.fetchPosts();
}

render() {
  return (
    <div>
      <Form fetchPosts={this.fetchPosts}/>
      <PostIndex posts={this.state.posts}/>
    </div>
  );
}
};
