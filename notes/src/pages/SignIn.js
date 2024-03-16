import React from 'react'
import Header from '../components/header/header.js';
import NotesList from '../components/notesList/notesList.js';
import NoteRow from '../components/note/noteRow.js';
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div>
        <div>
            <h1>Sign in to your Notes App</h1>
            <p>Don't have an account? <Link to='/SignUp' className='underline'> Sign Up </Link></p>
        </div>

        <form>
            <div>
                <label >Email Address</label>
                <input type='email'/> 
            </div>
            <div>
                <label >Password</label>
                <input type='password'/> 
            </div>
            <button>Sign In</button>
        </form>

    </div>
  )
}

export default SignIn