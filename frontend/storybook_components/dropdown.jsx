import React, { useState } from 'react';
import img from './menu.svg'
import { theme } from './../theme';
import styled from 'styled-components';

const UnorderedList = styled.ul`
margin: 0;
list-style-type: none;
position: absolute;
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

export const Dropdown = ({ picture, follows }) => {
  const [ contentVisible, setContentVisible ] = useState(false);

  const handleClick = () => {
    setContentVisible(!contentVisible);
  }

  const buttons = [];


  return (
    <>
                        <div onClick={() => handleClick()}>
                          <img src={img} />
                          {contentVisible &&
                          <UnorderedList>
                            {buttons.map(button => (
                               <ListItem >
                               <div
                                 onClick={() => button.onClick(picture)}
                               >
                                 {button.text}
                               </div>
                             </ListItem>
                            ))}

                </UnorderedList>
}
                        </div>
                            
                      </>
  )
}