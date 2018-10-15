import React from 'react';
import {withRouter} from 'react-router-dom'

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
        <h1 id="about">ABOUT</h1>
        <h3 id="about">"When in doubt, wrap it in a div tag" - a wise person</h3>
        </div>
    </div>
    )
  }


}

export default withRouter(About)
