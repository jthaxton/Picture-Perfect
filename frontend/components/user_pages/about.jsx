import React from 'react';
import {withRouter} from 'react-router-dom'
import Splash from '../splash/splash'
import { Link } from 'react-router-dom';


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="stick">
        <div id="banner">

        <nav id='navbar'>
          <div id="logo1">
            <Link to="/">Picture</Link>
          </div>
          <div id="logo2">
            <Link to="/">Perfect</Link>
          </div>
          <div id="other-nav">
            <div id="discover">
              <Link to="/discover">Discover</Link>
            </div>
            <div id="about">
              <Link to="/about">About</Link>
            </div>
            <div id="licensing">
              <Link to="/licensing">Licensing</Link>
            </div>
          </div>
        </nav>
      </div>
      </div>
      <div id="find-me">
      <a href="https://www.linkedin.com/in/josephthaxton/"><img class="find-me" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"></img></a>
      <a href="https://github.com/jthaxton"><img class="find-me" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"></img></a>
      </div>
    </div>
    )
  }


}

export default withRouter(About)
