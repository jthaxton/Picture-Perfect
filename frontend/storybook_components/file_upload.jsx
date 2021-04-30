import React from 'react';
import { FileDrop } from 'react-file-drop';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
export const StyledDivContainer = styled.div`
  display: block;
  min-width: 50%;
  min-height: ${(props) => props.size / 2}px;
`;

export const StyledPreview = styled.img`
  max-width: 40%;
  max-height: 40%;
`;

export const StyledButton = styled.button`
  background: ${props => props.disabled ? "grey" : "#34bf49"};
  color: white;
  cursor: pointer;
  width: 100%;
  height: 3em;
  font-size: 24px;
  &:hover {
    background: ${props => props.disabled ? "grey" : "#65e278"};
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  display: block;
`;

export const StyledLabel = styled.label`
  display: block;
`;

export default class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      photoFile: null,
      photoUrl: null,
      loading: false,
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
    this.setState({loading: true})
    const formData = new FormData();
    formData.append('picture[body]', this.state.body);
    if (this.state.photoFile) {
      formData.append('picture[photo]', this.state.photoFile);
    }
    this.props.uploadPicture(formData).then(() => {
      this.props.setModalVisible(false);
      this.setState({loading: false});
    })
  }

  handleFileInput(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    
    const preview = this.state.photoUrl ? <StyledPreview id="careful-pic" src={this.state.photoUrl} /> : null;
    return (
      <form onSubmit={this.handleSubmit}>
       {this.state.loading && <FontAwesomeIcon icon={faSpinner} spin/>}
        <StyledDivContainer size={this.props.size}>
            <StyledInput
              type="file"
              onChange={(e) => this.handleFileInput(e)}
            />
            {preview}
            {this.state.photoUrl && (
            <>
            <StyledLabel htmlFor="post-body">Body of Post</StyledLabel>
            <StyledInput
              type="text"
              id="post-body"
              value={this.state.body}
              onChange={this.handleInput}
            />
            </>)
    }
          {!this.state.photoUrl && <FileDrop
          onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
          onFrameDrop={(event) => console.log('onFrameDrop', event)}
          onDragOver={(event) => console.log('onDragOver', event)}
          onDragLeave={(event) => console.log('onDragLeave', event)}
          onDrop={(files, event) => this.handleFile(files[0])}
        >
                    Or drop some files here!
        </FileDrop>}
        </StyledDivContainer>
            <StyledButton disabled={this.state.body === '' || this.state.photoUrl === null}>Post a Perfect Picture</StyledButton>
      </form>

    );
  }
}
