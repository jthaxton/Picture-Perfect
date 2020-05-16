import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import FileUpload from './file_upload';
import styled from 'styled-components';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    minWidth              : "75%",
    minHeight             : "75%",
  },
  overlay : {
    background: "rgba(0, 0, 0, 0.5)"
  },
};

export const StyledUploadButton = styled.div`
  display: flex;
  justify-content: center;
  background: #34bf49;
  color: white;
  padding: 10px;
  border-radius: 5px;
  max-width: 5em;
  &:hover {
    background: #65e278;
    cursor: pointer;
  }
`;

const FileUploadModalButton = ({uploadPicture, size}) => {
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    Modal.setAppElement('body');

  })
  return (
    <>
    <StyledUploadButton onClick={() => setModalVisible(true)}>
      Upload
    </StyledUploadButton>
    <Modal
      isOpen={modalVisible}
      onAfterOpen={()=> console.log("opened")}
      onRequestClose={() => setModalVisible(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
    <FileUpload uploadPicture={uploadPicture} setModalVisible={setModalVisible} size={size}/>
    </Modal>
          </>
  );
}

export default FileUploadModalButton;