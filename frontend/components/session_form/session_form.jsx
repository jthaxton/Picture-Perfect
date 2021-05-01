import { Button, Input, DialogTitle, Card, makeStyles, Box, AppBar, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {
  withRouter, Route, Redirect, Switch, Link, HashRouter,
} from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`
const useStyles = makeStyles({
  dialogue: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    paddingBottom: "5vw"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
  },
  form: {

  },
  navLoginContainer: {
    display: "flex"
  },
  navContents: {
    display: "flex",
    justifyContent: "space-between"
  },
  navLogin: {
    paddingRight: "10px",
  },
  appBar: {
    padding: "20px",
    paddingRight: "30px",
    paddingLeft: "30px",
  },
  card: {
    minWidth: "25%",
    minHeight: "25%",
    paddingBottom: "5vw",
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  input: {
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
  loginSubmit: {
    marginBottom: "10px"
  },
  inputContainer: {

  }
});

const SessionForm = (props) => {
    const [password, setPassword] = useState(""); 
    const [username, setUsername] = useState(""); 

  const classes = useStyles();

  const handleDemo = (e) => {
    e.preventDefault();
    const demo = { username: 'joe', password: '123456' };
    props.processDemo(demo).then((test) => window.location.reload());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username: username, password: password };
    props.processForm(user).then(() => window.location.reload());
  }

  useEffect(() => {
    props.clearErrors();
  }, [])

    return (
      <>
        <AppBar className={classes.appBar} position="fixed">
          <Box className={classes.navContents}>
            <Link to="/">Picture Perfect</Link>
            <Box className={classes.navLoginContainer}>
              <Link to="/login" replace className={classes.navLogin}>
              <Typography>Login</Typography>
              </Link>
              <Link to="/signup"><Typography>Signup</Typography></Link>
            </Box>
          </Box>
        </AppBar>
        <Card className={classes.card}>
          <Box className={classes.form}>
            {props.formType === 'Login' ? (
              <DialogTitle className={classes.dialogue}>
                Log In
              </DialogTitle>
            ) : <DialogTitle className={classes.dialogue}>Sign Up</DialogTitle>}
            <Box className={classes.inputContainer}>
              <Box className={classes.input}>
                  <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Box>
              <Box className={classes.buttonContainer}>
                <Button className={classes.loginSubmit} onClick={handleSubmit} variant="contained" color="primary">{props.formType === 'Login' ? "Log In" : "Sign Up"}</Button>
                <Button onClick={handleDemo} variant="contained" color="primary">Demo Log In</Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </>
    );
  
}
export default withRouter(SessionForm);
