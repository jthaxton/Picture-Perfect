import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Post} from '../../storybook_components/post';
import CommentForm from './comment_form';
import CommentIndex from './comment_index';
import { Dropdown } from '../../storybook_components/dropdown';
import styled from 'styled-components';

const StyledPostIndex = styled.div`
  display: block;
  max-width: 80%;
`;

export class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      picture_id: '',
    };
    this.store = {};
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('comment[comment]', this.state.comment);
  //   formData.append('comment[user_id]', this.props.currentUser.id);
  //   formData.append('comment[picture_id]', this.state.picture_id);
  //   $.ajax({
  //     url: '/api/comments',
  //     data: formData,
  //     method: 'POST',
  //     contentType: false,
  //     processData: false,
  //   }); this.props.history.push('/');
  // }

  // update(field) {
  //   return (e) => this.setState({
  //     [field]: e.currentTarget.value,
  //   });
  // }

  componentDidMount() {
    this.props.fetchPosts();
  }

  // handleInput(e) {
  //   this.setState({ comment: e.currentTarget.value });
  // }
  render() {

    return (
      <StyledPostIndex>
        {this.props.pictures && this.props.pictures.followed_pictures && this.props.pictures.followed_pictures.map((picture) => {
          return (
            <Post owner={picture.owner} picture={picture} submit={this.props.createComment} updateProfPic={this.props.updateProfPic} deletePicture={this.props.deletePicture}/>
        )})}
        {!(this.props.pictures && this.props.pictures.followed_pictures) && (<div>No photos... yet! Upload photos and follow other pages!</div>) }
      </StyledPostIndex>
    );
  }
}

