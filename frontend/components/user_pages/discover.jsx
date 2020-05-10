import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Post } from '../../storybook_components/post';
import CommentForm from './comment_form';
import CommentIndex from './comment_index';
import { Dropdown } from '../../storybook_components/dropdown';

const StyledPostIndex = styled.div`
  display: block;
  max-width: 80%;
`;

export class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.store = {};
  }

  componentDidMount() {
    this.props.fetchDiscoverPosts();
  }

  render() {
    console.log(this.props)
    return (
      <StyledPostIndex>
        {this.props.pictures && this.props.pictures.followed_pictures && this.props.pictures.followed_pictures.map((picture) => (
          <Post owner={picture.owner} picture={picture} submit={this.props.createComment} updateProfPic={this.props.updateProfPic} deletePicture={this.props.deletePicture} currentUserId={this.props.currentUserId}/>
        ))}
        {!(this.props.pictures && this.props.pictures.followed_pictures) && (<div>No photos... yet! Upload photos and follow other pages!</div>) }
      </StyledPostIndex>
    );
  }
}
