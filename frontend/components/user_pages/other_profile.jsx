import React from 'react';
import Profile from './profile'
import {withRouter} from 'react-router-dom'
import Form from '../welcome/form';
import Splash from '../splash/splash'

export default class OtherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.fetchUser(this.props.userId)
    }

  }



  componentDidMount() {
    const variable = this.props.userId
     this.props.fetchUser(variable);
  }

  render() {
    debugger

    if (!this.props.posts) return null;
    const allPosts = this.props.posts.map(post => {
      return (
        <img id="otherprofpic" src={post.photoUrl}></img>
      )
    })
    return (
      <div>
        <Splash session={this.props.session}/>
      <h1>{this.props.username}</h1>
      <div id="otherprof">


        { allPosts }
      </div>
      </div>
    )

  }
}
