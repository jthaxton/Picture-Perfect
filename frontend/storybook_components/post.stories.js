import React from 'react';
import { Post } from './post';
import { props } from './dropdown.stories';
import img from '../../homepage.png';

export default { title: 'Post' };
const comments = [
  { id: 1, user: { name: 'test person' }, comment: 'test comment' },
  { id: 2, user: { name: 'test person 2' }, comment: 'other test comment' },
];

const newProps = {
  ...props, submit: () => console.log('PRESSED'), src: img, name: 'joe', picture: { photo: { service_url: img }, comments },
};

export const post = () => <Post {...newProps} />;
