import React from 'react';
import Profile from './profile'
export default class ProfileDetails extends React.Component {
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

  render() {
    
    return (
      <div>
        <Profile posts={this.state.posts}/>
      </div>
    );
  }
}
