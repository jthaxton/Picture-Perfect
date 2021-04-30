import React from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { CommentSection } from './comment_section';

export const StyledPicture = styled.img`
  margin-top: 3em;
  margin-bottom: 3em;
  width: 100%;
`;

export const StyledPost = styled.div`
  display: grid;
  padding: 5em;
  background: white;
  margin-bottom: 1em;
`;

export const Post = ({
  owner, picture, submit, followed, createFollow,  deleteFollow, deletePicture, updateProfPic, currentUserId
}) => {

  return (picture.service_url
 && (
 <StyledPost>
   <Header src={owner.profile_picture} followed={followed} picture={picture} name={owner.name} deletePicture={deletePicture} updateProfPic={updateProfPic} currentUserId={currentUserId} createFollow={createFollow} deleteFollow={deleteFollow}/>
   <StyledPicture src={picture.service_url} />
   <CommentSection comments={picture.comments} pictureId={picture.id} submit={submit} />
 </StyledPost>
 ));}
