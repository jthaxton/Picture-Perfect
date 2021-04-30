import React, { useState } from 'react';
import styled from 'styled-components';
import img from './menu.svg';
import { theme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const UnorderedList = styled.ul`
  margin: 0;
  list-style-type: none;
  white-space: nowrap;
  padding: 0;
  max-width: fit-content;
  z-index: 2;
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
  picture, createFollow, deleteFollow, deletePicture, updateProfPic
}) => {
  const [contentVisible, setContentVisible] = useState(false);

  const handleClick = () => {
    setContentVisible(!contentVisible);
  };


  return (
    <>
      <div onClick={() => handleClick()}>
        <FontAwesomeIcon icon={contentVisible ? faAngleDown : faAngleLeft} />
        {contentVisible
                          && (
                            <DropdownContents picture={picture} deletePicture={deletePicture} updateProfPic={updateProfPic} createFollow={createFollow} deleteFollow={deleteFollow}/>
                          )}
      </div>

    </>
  );
};

export const DropdownContents = ({picture, currentUserId, deletePicture, updateProfPic, createFollow, deleteFollow}) => {

  if (picture.belongs_to_current_user) {
    return (
    <UnorderedList>
      <ListItem>
        <div
          onClick={() => deletePicture(picture.id)}
        >
          Delete Post
        </div>
      </ListItem>
      <ListItem>
        <div
          onClick={() => updateProfPic(currentUserId, picture.id)}
        >
          Update Profile Picture
        </div>
      </ListItem>
    </UnorderedList>

    );
  } else if(picture.followed_by_current_user) {
    return (
      <UnorderedList>
      <ListItem>
        <div
          onClick={() => deleteFollow(picture.owner.id)}
        >
          Unfollow
        </div>
      </ListItem>
    </UnorderedList>
    )
  } else if(!picture.followed_by_current_user && !picture.belongs_to_current_user) {
    return (
    <UnorderedList>
    <ListItem>
      <div
        onClick={() => createFollow(picture.owner.id)}
      >
        Follow
      </div>
    </ListItem>
  </UnorderedList>
    );
  }

}
