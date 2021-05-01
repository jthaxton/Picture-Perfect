import React from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { CommentSection } from './comment_section';
import { Card, makeStyles, Dialog, Box, AppBar, Typography } from '@material-ui/core';


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

const useStyles = makeStyles({
  card: {
    maxWidth: "85%",
    margin: "auto",
    padding: "25px",
    marginBottom: "10px"
  }
});

export const Post = ({
  owner, picture, submit, followed, deleteFollow, deletePicture, updateProfPic, currentUserId
}) => {
  const classes = useStyles();
  return (picture.service_url
 && (
 <Card className={classes.card}>
   <Header src={owner.profile_picture} followed={followed} picture={picture} name={owner.name} deletePicture={deletePicture} updateProfPic={updateProfPic} currentUserId={currentUserId}/>
   <StyledPicture src={picture.service_url} />
   <CommentSection comments={picture.comments} pictureId={picture.id} submit={submit} />
 </Card>
 ));}
