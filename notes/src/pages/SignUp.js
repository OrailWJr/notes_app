import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <div>
            <h1>Sign Up for your free Notes App</h1>
            <p>Already have an account? <Link to='/SignIn' className='underline'> Sign In </Link></p>
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
            <button>Sign Up</button>
        </form>

    </div>
  )
}

export default SignUp