import React from 'react';
import styled from 'styled-components';
import {Header} from './header';
import { CommentSection } from './comment_section'

export const StyledPicture = styled.img`
  margin-top: 3em;
  margin-bottom: 3em;
  width: 100%;
`;

export const StyledPost = styled.div`
  display: grid;

`;

export const Post = ({src, name, picture, submit, follows}) => {
  return (
    <StyledPost>
      <Header src={src} follows={follows} picture={picture} name={name}/>
      <StyledPicture src={picture.photo.service_url} />
      <CommentSection comments={picture.comments} submit={submit}/>
    </StyledPost>
  )
}