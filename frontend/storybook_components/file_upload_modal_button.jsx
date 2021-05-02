import React, {useState, useEffect} from 'react';
// import Modal from 'react-modal';
import FileUpload from './file_upload';
import styled from 'styled-components';
import { Fab, DialogTitle, Dialog, makeStyles, Box, AppBar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

const useStyles = makeStyles({
  uploadIcon: {
    background: "#34bf49",
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "20px",
    alignItems: "flex-end",
    position: "absolute",
    right: 0,
    bottom: 0,
    paddingRight: "20px",
  },
  fade: {
    height: "50%"
  },
  modal: {
    height: "100%"
  }
})

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
  const classes = useStyles();

  return (
    <Box className={classes.container}>
    <Fab color="primary" aria-label="add" className={classes.uploadIcon}>
      <AddIcon onClick={() => setModalVisible(true)} />
    </Fab>

    <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalVisible}
        onClose={() => setModalVisible(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableAutoFocus={true}
        style={{width: "-webkit-fill-available"}}
      >
        {/* <Fade in={modalVisible} className={classes.fade}> */}
          <FileUpload uploadPicture={uploadPicture} setModalVisible={setModalVisible} size={size}/>
        {/* </Fade> */}
      </Dialog>
    {/* <Modal
      isOpen={modalVisible}
      onAfterOpen={()=> console.log("opened")}
      onRequestClose={() => setModalVisible(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
    <FileUpload uploadPicture={uploadPicture} setModalVisible={setModalVisible} size={size}/>
    </Modal> */}
    </Box>
  );
}

export default FileUploadModalButton;