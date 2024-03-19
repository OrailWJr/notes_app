import React from 'react'
import NotesList from '../components/notesList/notesList';
import CreateNote
 from '../components/createNote/CreateNote';
import { signOut } from 'firebase/auth';
import { auth } from '../components/firebase/firebase';

const Home = ({user}) => {
  const handleSignOut = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error.code, error.message)
    });
    
  }

  console.log("checking if user passed here", user)
  return (
    <div>
        <CreateNote user={{user}}/>
        <button type='button' onClick={handleSignOut}>sign out</button>
        <NotesList />


   </div>
  )
}

export default Home