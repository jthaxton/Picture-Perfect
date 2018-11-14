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

 

  render() {
    if (!this.props.user) return null;
    if (!this.props.posts) return null;
    const allPosts = this.props.posts.map(post => {

      return (
        
        <div>
          <div id="indexitem">
          <img id="careful-pic" src={post.photoUrl} />
        </div>
        </div>
      );
    });

    return <div>
        <Splash session={this.props.session} />
        <div id='test'>
        <div class="index-posts">
          <div id="infpost">
            <div id="user-index-posts">
              <div id="user-post-info">
                
                  <h1>{this.props.user.username}</h1>

                  <div>{allPosts}</div>
               
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>;

  }
}
