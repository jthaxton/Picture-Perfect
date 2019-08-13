import React from 'react';
import SplashContainer from '../splash/splash_container';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      photoFile: null,
      photoUrl: null
    };
  }

  handleInput(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture[body]', this.state.body);
    if (this.state.photoFile) {

      formData.append('picture[photo]', this.state.photoFile);

    }
    $.ajax({
      url: '/api/pictures',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON);
      }
    );
    this.props.history.push('/');

  }

  render() {
    console.log(this.state);
    const preview = this.state.photoUrl ? <img id="careful-pic" src={this.state.photoUrl} /> : null;
    return (
      <div id="upload-style">
      <SplashContainer component={this.props.session}/>
      <div id="upload-container">
      <form id="upload-form" onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="post-body">Body of Post</label>
        <input type="text"
          id="post-body"
          value={this.state.body}
          onChange={this.handleInput.bind(this)}/>
        <input type="file"
          onChange={this.handleFile.bind(this)}/>
        <h3>Image preview </h3>
        {preview}
        <button id="post-picture">Post a Perfect Picture</button>
      </form>

      </div>
    </div>
    );

  }
}
