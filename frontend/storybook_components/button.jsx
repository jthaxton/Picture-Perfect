import React from 'react';
import  styled  from 'styled-components';
import { theme } from '../theme';

const StyledButton = styled.button`
padding: 0 12px 1px;
background-color: ${theme.titleText.background};
color: ${theme.titleText.color};
display: inline-block;
font-size: 12px;
-webkit-font-smoothing: antialiased;
font-weight: bold;
height: 27px;
line-height: 28px;
padding: 0 10px 1px;
position: relative;
text-decoration: none;
vertical-align: top;
white-space: nowrap;
outline: 0;
`;
export const Button = () => {
  console.log(theme.titleText)
  return (
    <StyledButton>
      TEST
    </StyledButton>
  )
}