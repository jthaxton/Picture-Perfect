import React from 'react';
import SplashContainer from '../splash/splash_container';
import { FileDrop } from 'react-file-drop';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      photoFile: null,
      photoUrl: null,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleFile(file) {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
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
    this.props.uploadPicture(formData)
    this.props.history.push('/');
  }

  render() {
    const preview = this.state.photoUrl ? <img id="careful-pic" src={this.state.photoUrl} /> : null;
    return (
      <div id="upload-style">
        <SplashContainer component={this.props.session} />
        <div id="upload-container">
          <form id="upload-form" onSubmit={this.handleSubmit}>
            <label htmlFor="post-body">Body of Post</label>
            <input
              type="text"
              id="post-body"
              value={this.state.body}
              onChange={this.handleInput}
            />
            <input
              type="file"
              onChange={this.handleFile}
            />
            <h3>Image preview </h3>
            {preview}
            <FileDrop
          onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
          onFrameDrop={(event) => console.log('onFrameDrop', event)}
          onDragOver={(event) => console.log('onDragOver', event)}
          onDragLeave={(event) => console.log('onDragLeave', event)}
          onDrop={(files, event) => this.handleFile(files[0])}
        >
                    Drop some files here!
        </FileDrop>
            <button id="post-picture">Post a Perfect Picture</button>
          </form>

        </div>
      </div>
    );
  }
}
