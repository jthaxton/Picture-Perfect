import React from 'react';
import {withRouter} from 'react-router-dom'

class Licensing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
        <h1 id="licensing">LICENSING</h1>
        <h3 id="licensing">Legal stuff here</h3>
        </div>
    </div>
    )
  }


}

export default withRouter(Licensing)
