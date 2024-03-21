import React, { useState } from 'react'
import Header from '../components/header/header.js';
import NotesList from '../components/notesList/notesList.js';
import NoteRow from '../components/note/noteRow.js';
import { Link, Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/firebase.js';
import './signin.css'

const SignIn = ({user}) => {
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
            console.log(errCode, errMessage)
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
    <div className='app_container'>
        <div>
            { !isSignUpActive && 
                    <div>
                        <h1>Sign in to your Notes App</h1>
                        <p>Don't have an account? <a onClick={handleSignUpIsActive} >Sign Up</a></p>  
                    </div>
                    
                    }
                    {console.log(isSignUpActive)}
                    { isSignUpActive && 
                    <div>
                        <h1>Sign Up For Your Notes App Today</h1>
                        <p>Have an account already? <a onClick={handleSignUpIsActive} >Sign In</a>  </p>
                    </div>
                    }

                    <form>
                        <div>
                            <label >Email Address</label>
                            <input type='email' onChange={(e) => setEmail(e.target.value)}/> 
                        </div>
                        <div>
                            <label >Password</label>
                            <input type='password'onChange={(e) => setPassword(e.target.value)}/> 
                        </div>
                        { !isSignUpActive && <button type="button" onClick={handleSignIn} >Sign In</button> }
                        { isSignUpActive && <button type="button" onClick={handleSignUp} >Sign Up</button> }
                    </form>

        </div>
       

    </div>
  )
}

export default SignIn