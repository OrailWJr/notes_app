import React from 'react'
import NotesList from '../components/notesList/notesList'
import CreateNote
 from '../components/createNote/CreateNote'
const Home = () => {
  return (
    <div>
        <CreateNote />
        <NotesList />

        
   </div>
  )
}

export default Home