import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../components/context/authContext'; 

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
        await createUser(email, password)
        }catch (e) {
            setError(e.message)
            console.log(e.message)
        }

    }
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
            <button action="button" >Sign Up</button>
        </form>

    </div>
  )
}

export default SignUp