import React from 'react';
import { Header } from './header';
import { props } from './dropdown.stories';
import img from '../../homepage.png';

export default { title: 'header' };

const newProps = { ...props, src: img, name: 'joe' };

export const header = () => (
  <Header {...newProps} />

);
