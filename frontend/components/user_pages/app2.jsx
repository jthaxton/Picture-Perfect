import React from 'react';
import { PostIndex } from './postindex';

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }


  render() {
    return (
      <div id="test" />
    );
  }
}
