import React, { useState } from 'react';
import styled from 'styled-components';
import img from './menu.svg';
import { theme } from '../theme';
import { Button, Menu, MenuItem, Card, makeStyles, Box, AppBar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const UnorderedList = styled.ul`
  margin: 0;
  list-style-type: none;
  white-space: nowrap;
  padding: 0;
  max-width: fit-content;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  min-width: 100px;
  max-width: 300px;
  padding: 1em;
  border: 1px solid black;
  font-family: ${theme.titleText.family};
  font-weight: ${theme.titleText.weight};
  background: ${theme.titleText.background};
  color: ${theme.titleText.color};
`;

export const Dropdown = ({
  picture, follows, deletePicture, updateProfPic, currentUserId
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDelete = () => {
    deletePicture(picture.id);
    setAnchorEl(null);
  }

  const handleUpdateProfPic = () => {
    updateProfPic(currentUserId, picture.id);
    setAnchorEl(null);
  }
  console.log("PICTURE", picture)

  return (
<>
                          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=> setAnchorEl(e.currentTarget)}>
                            <MenuIcon/>
                          </Button>
                          <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                          >
                            <MenuItem onClick={() => handleDelete()}>Delete Post</MenuItem>
                            <MenuItem onClick={() => handleUpdateProfPic()}>Update Profile Picture</MenuItem>
                          </Menu>
                          </>
                          // <UnorderedList>
                          //     <ListItem>
                          //       <div
                          //         onClick={() => deletePicture(picture.id)}
                          //       >
                          //         Delete Post
                          //       </div>
                          //     </ListItem>
                          //     <ListItem>
                          //       <div
                          //         onClick={() => updateProfPic(currentUserId, picture.id)}
                          //       >
                          //         Update Profile Picture
                          //       </div>
                          //     </ListItem>

                          // </UnorderedList>
                          // )}

  );
};
