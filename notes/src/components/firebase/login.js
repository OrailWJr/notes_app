import React, { useState} from 'react';
import { Navigate, Link} from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from './auth';
import { useAuth } from '../context/authContext';

const Login = () => {

    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn){
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(email, password);
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefult()
        if(!isSigningIn){
            setIsSigningIn(true);
            doSignInWithGoogle().catch(err =>{
                setIsSigningIn(false)
            })
        }
    }
    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
        </div>
    )

}