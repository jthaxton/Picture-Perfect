import React from 'react';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import Form from '../welcome/form';

export default class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.pictures.length > 0) {
      return (
        <div>
          <h1 className="header-name">
            {this.props.currentUser.username}
            s Profile
          </h1>

          <Profile posts={this.props.pictures} currentUser={this.props.currentUser} />
        </div>
      );
    }
    return null;
  }
}
