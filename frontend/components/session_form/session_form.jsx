import React from 'react';
import {withRouter} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
    this.state = {
      username: '',
      password: ''
    };
  }

  handleDemo(e) {
    e.preventDefault();
    
    const demo = Object.assign({},{username: 'joe', password: '123456'});
    this.props.processForm(demo).then( test =>
    this.props.history.push('/'))
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( () =>
    this.props.history.push('/'))
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


    return (

      <div class='login-container'>
        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <div class='login-form'>
              {this.props.formType === 'login' ? <h2 class="modals">Log into PicturePerfect</h2> : <h2 class="modals">Sign up for PicturePerfect</h2>}
              <div id='login-center'>
                <div class="anotha-one">
                  <label>
                    Username:
                  </label>
                  <input type='text' value={this.state.username} onChange={this.update('username')}/>
                </div>
                <div class="anotha-one">
                  <label>
                    Password:
                  </label>
                  <input type='password' value={this.state.password} onChange={this.update('password')}/>
                </div>
              <input id='submit' type='submit' value={this.props.formType}></input>
          </div>
          <form onSubmit={this.handleDemo}>
            <input id="demo-button" type='submit' value="Demo Login"></input>
          </form>
          </div>
        </form>


      </div>
    )
  }


}
export default withRouter(SessionForm)
