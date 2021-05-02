import React from 'react';
import styled from 'styled-components';
import { Dropdown } from './dropdown';
import { theme } from '../theme';
import { Avatar, Button, Dialog, makeStyles, Box, AppBar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeFollow } from '../actions/follows_actions';


export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px; 
`;

export const PersonalInfo = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.headerText.family};
  font-weight: ${theme.headerText.weight};
`;

export const Name = styled.div`
  padding-left: 1em;
`;

export const StyledPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = ({
  src, picture, name, followed, deletePicture, updateProfPic,currentUserId, makeFollow, deleteFollow
}) => (
  <>
    <StyledPostHeader>
      <PersonalInfo>
      <Avatar alt={name} src={src} />
        <Name>
          {name}
        </Name>
      </PersonalInfo>
      { picture.owner.id === currentUserId ? 
      <Dropdown picture={picture} deletePicture={deletePicture} updateProfPic={updateProfPic} currentUserId={currentUserId}/>
      :  picture.owner.followed ? 
      <Button onClick={() => deleteFollow(picture.owner.id)}>
        <RemoveIcon/>
      </Button> :
        <Button onClick={() => makeFollow(picture.owner.id)}>
          <AddIcon/>
        </Button> }
    </StyledPostHeader>
  </>
);
