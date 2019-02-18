import React from 'react';
import Profile from './profile';
import {withRouter} from 'react-router-dom';
import Form from '../welcome/form';
import Splash from '../splash/splash';

export default class OtherProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const variable = this.props.userId;
     this.props.fetchUser(variable);
  }

  componentDidUpdate(prevprops) {
    // if (prevprops.userId !== this.props.userId) {
    if (!this.props.user) {
      this.props.fetchUser(this.props.userId);
    }
  }

  render() {
    if (!this.props.user) return null;
    if (!this.props.posts) return null;
    const back = this.props.posts[0];
    const allPosts = this.props.posts.slice(0,this.props.posts.length).map(post => {
      
      return <div key={post.id}>
        {post.photoUrl ? 
          <div className="index-posts">
            <div id="infpost">
              <div id="indexitem">
                <img id="careful-pic" src={post.photoUrl} />
                <h2 className="nomargin" id="bodypost">
                  {post.body}
                </h2>
              </div>
            </div>
          </div> : null} 
        </div>;
    });
    return <div>
        <Splash session={this.props.session}/>
      {/* <div id="profback">
        <img src={back.photoUrl} />
      </div> */}
        <div id='test'>
        <div>
          <div id="user-post-info">

            <h1>{this.props.user.username}</h1>
            </div>
            <div id="user-index-posts">
                  <div>{allPosts}</div>
            </div>             
          </div>
        </div>
      </div>;

  }
}
