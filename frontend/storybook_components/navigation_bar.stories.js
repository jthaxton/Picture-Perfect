import React from 'react';
import { NavigationBar } from './navigation_bar';
import { props } from './dropdown.stories';
import img from '../../homepage.png';

export default { title: 'navigation_bar' };

const newProps = {
  session: {
    id: 1,
  },
  logout: () => console.log('logged out'),
};

export const Navigation = () => (
  <NavigationBar {...newProps} />

);
