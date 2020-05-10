import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

export const StyledInput = styled.input`
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

const StyledComment = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  font-family: ${theme.basicText.family};
  padding: 0.5em;
`;

const StyledUser = styled.div`
  font-family: ${theme.headerText.family};
  font-weight: ${theme.headerText.weight}
`;

const StyledCommentBody = styled.div`
  font-family: sans-serif;  
`;

export const CommentSection = ({ comments, submit, pictureId }) => {
  const [body, setBody] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    setBody(e.currentTarget.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13 || e.which == 13) {
      e.preventDefault();
      submit({ comment: body, picture_id: pictureId });
      setBody('');
    }
  };
  return (
    <>
      {comments && comments.map((comment) => (
        <StyledComment key={comment.id}>
          <StyledUser>{comment.name}</StyledUser>
          <StyledCommentBody>{comment.comment}</StyledCommentBody>
        </StyledComment>
      ))}
      <StyledInput value={body} onChange={(e) => handleChange(e)} onKeyDown={(e) => handleKeyDown(e)} />
    </>
  );
};
