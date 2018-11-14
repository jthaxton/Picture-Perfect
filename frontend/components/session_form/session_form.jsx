import React from 'react';
import {withRouter} from 'react-router-dom';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = Object.assign({},{username: 'joe', password: '123456'});
    this.props.processDemo(demo).then( test =>
    this.props.history.push('/'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( () =>
    this.props.history.push('/'));
  }

  update(field) {
    return e=> this.setState ({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }



  renderErrors() {

    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {


    return <div class="login-container">
        <div id="stick">
          <div id="banner">
            <nav id="navbar">
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
              <div id="auth-buttons">
                <div id="login-button">
                  <Link to="/login" replace>
                    Login
                  </Link>
                </div>
                <div id="signup-button">
                  <Link to="/signup">Signup</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {this.renderErrors()}
        <div id="modalform">
          <form onSubmit={this.handleSubmit}>
            <div class="login-form">
              {this.props.formType === "Login" ? <h2 class="modals">
                  Log into PicturePerfect
                </h2> : <h2 class="modals">Sign up for PicturePerfect</h2>}
              <div id="login-center">
                <div class="anotha-one">
                  <label>Username:</label>
                  <input type="text" value={this.state.username} onChange={this.update("username")} />
                </div>
                <div class="anotha-one">
                  <label>Password:</label>
                  <input type="password" value={this.state.password} onChange={this.update("password")} />
                </div>
              <div id="sub"><input id="submit" type="submit" value={this.props.formType} /></div>
              </div>
              <form onSubmit={this.handleDemo}>
                <input id="demo-button" type="submit" value="Demo Login" />
              </form>
            </div>
          </form>
        </div>
      </div>;
  }


}
export default withRouter(SessionForm);
