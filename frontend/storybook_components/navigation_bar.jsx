import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import SplashContainer from '../components/splash/splash_container';
import styled from 'styled-components';
import FileUploadModalButtonContainer from '../storybook_components/file_upload_modal_button_container';
import { Button, Menu, MenuItem, Card, makeStyles, Box, AppBar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  appBar: {
    padding: "20px",
    paddingRight: "30px",
    paddingLeft: "30px",
  },
  navContents: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center"
  },
  discover: {
    paddingRight: "20px"
  },
  navLoginContainer: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
  },
  rootLink: {
    display: "flex",
    alignItems: "center"
  },
  feedLinks: {
    paddingRight: "5vw"
  }

})

export const NavigationBar = ({ currentUser, logout }) => {
const classes = useStyles();

const [anchorEl, setAnchorEl] = useState(null);

const handleLogOut = () => {
  setAnchorEl(null);
  logout().then(res => {
      window.location = "/";
  });
}

return (  

  <AppBar className={classes.appBar} position="fixed">
  <Box className={classes.navContents}>
    <Link to="/" className={classes.rootLink}>Picture Perfect</Link>
    <Box className={classes.navLoginContainer}>
      <Box className={classes.feedLinks}>
        <Link replace to="/discover" className={classes.discover}>
            Discover
        </Link>
        <Link replace to="/">
          My Feed
        </Link>
      </Box>


        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=> setAnchorEl(e.currentTarget)}>
          <MenuIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleLogOut()}>Logout</MenuItem>
        </Menu>
    </Box>
  </Box>
</AppBar>
)

{/* <div id="stick">
    <div id="banner">
      <nav id="navbar">
        <div id="logo1">
          <a href="/">Picture</a>
        </div>
        <div id="logo2">
          <a href="/">Perfect</a>
        </div>
        <div id="other-nav" />
        {currentUser ? (
          <>
          <StyledFeedLinks>
            <Link replace to="/discover">
              Discover
            </Link>
            <Link replace to="/">
              My Feed
            </Link>
          </StyledFeedLinks>
          <div id="logged-nav">
            <ul className="header-list">
              <li>
                <img src="/menu.png" id="user-menu" />

                <ul className="header-notifications">
                  <li>
                    <Link to={`/users/${currentUser.id}`}>Profile</Link>
                  </li>
                  <li>
                    <Link replace to="/" onClick={() => logout()}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <FileUploadModalButtonContainer/>
          </div>
          </>
        ) : (
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
        )}
      </nav>
    </div>
  </div>) */}

};
