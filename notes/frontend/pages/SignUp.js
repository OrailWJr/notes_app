import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material'; // Import Material-UI components
import { Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/firebase.js';
import './signup.css';

function SignInMui({user}) {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSignUpIsActive = () => {
        setIsSignUpActive(!isSignUpActive)
    }
    
    const handleSignUp = () => {
        if (!email || !password ) return;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        }).catch((error) => {
            const errCode = error.code;
            const errMessage = error.message;
            console.log(errCode, "checking", errMessage)
        })
    }

    const handleSignIn = () => {
        if (!email || !password ) return;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        }).catch((error) => {
            const errCode = error.code;
            const errMessage = error.message;
            console.log(errCode, errMessage)
        })
    }

    if (user) {
      return <Navigate to='/home'> </Navigate>
  }

  return (
    <div className="signIn-container">
        <Container component="main" maxWidth="xs">
      <div>
      { !isSignUpActive && 
        <Typography component="h1" variant="h5">
          Welcome Back to Notes!
        </Typography>}
        { isSignUpActive && 
        <Typography component="h1" variant="h5">
          Sign Up For Notes!
        </Typography>}

        <form >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            // label="Email Address"
            placeholder='Email'
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder='Password'
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        { !isSignUpActive &&   
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>}
          { isSignUpActive &&   
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignUp}
          >
            Create Account
          </Button>}

          <Grid container justifyContent="space-between">
          { !isSignUpActive &&  
            <Grid item>
              <Button typeof='button' size='small' onClick={handleSignUpIsActive}>
                Sign Up
              </Button>
            </Grid>}
            { isSignUpActive &&  
            <Grid item>
              <Button size='small' type="button" onClick={handleSignUpIsActive}>
                Already have an Account?
              </Button>
            </Grid>}


            <Grid item>
            <Button size='small' type='button' >
                Forgot password?
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
    
  );
}

export default SignInMui;