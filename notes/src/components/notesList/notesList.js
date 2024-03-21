import React from 'react'
import NoteRow from '../note/noteRow.js'
import { useState, useEffect} from 'react'
import './noteList.css'

// import getNotes from './firebase/firebase.js'

const NotesList = ({user, notes}) => {
    

    const [note, setNotes] = useState(notes)
    
    

  return (
   <div className="notes_list">
        {notes.map((item) => ( 

            <NoteRow
                key = {item.id}
                note = {item}
            />
        ))}
   </div>
  )
}

export default NotesList