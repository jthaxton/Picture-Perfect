import React from 'react';
import { Dropdown } from './dropdown';

export default { title: 'Dropdown' };

export const props = [
  {
    onClick: () => console.log("clicked1"),
    id: 1,
    text: "test1"
  },
  {
    onClick: () => console.log("clicked2"),
    id: 2,
    text: "test2"
  }
]
export const dropdown = () => <Dropdown buttons={props}></Dropdown>;
