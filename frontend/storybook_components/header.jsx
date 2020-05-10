import React from 'react';
import { Dropdown } from './dropdown';
import styled from 'styled-components';
import {theme} from '../theme';

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

export const Header = ({src, picture, name, followed, deletePicture, updateProfpic}) => {
  return (
    <>
      <StyledPostHeader>
      <PersonalInfo>
        <ProfilePicture src={src}/>
        <Name>
          {name}
        </Name>
      </PersonalInfo>
      <Dropdown picture={picture} deletePicture={deletePicture} updateProfpic={updateProfpic}></Dropdown>
      </StyledPostHeader>
    </>
  );
}