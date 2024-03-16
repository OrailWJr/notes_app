import React from 'react'
import NoteRow from '../note/noteRow.js'
import { useState, useEffect} from 'react'
import './noteList.css'
// import getNotes from './firebase/firebase.js'

const NotesList = () => {
    const notes = [
        {   id: 1, 
            data:
    
            {
                id: 1,
                dates: 1,
                message: 'testing'
            }
        },
        {   id: 2, 
            data: 
            {
                id: 2,
                dates: 2,
                message: ' testing 2'
            }
        }
        
];
    const [note, setNotes] = useState(notes)

    useEffect(() => {
        // db.collection('emails')
        // .orderBy('timestamp', 'desc')
        // .onSnapshot(snapshot => 
        //     setNotes(snapshot.docs.map(doc => ({
        //         id: doc.id,
        //         data: doc.data(),
        //         }))
        //     )
        // );
    }, [])

console.log(note)
  return (
   <div className="notes_list">
        {note.map(({ data: {id, message}}) => (   
            <NoteRow
                key = {id}
                note = {message}
            />
        ))}
   </div>
  )
}

export default NotesList