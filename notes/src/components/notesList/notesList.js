import React from 'react'
import NoteRow from '../note/noteRow.js'
import { useState, useEffect} from 'react'
import './noteList.css'
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
        <div className="notes_settings">
            <div className="notes_setting_left">
                <div className="edit_note">e</div>
                <div className="delete_note">x</div>
            </div>
        
            <div className="note_setting_right">n
            
            </div>
            
        </div>
        {note.map(({ data: {id, message}}) => (
            // <div id={item} className="testthisdiv">
                
            //     {note.note}
            //     {console.log("this is item", note, dates)}
            //     {}
            // </div>
            // <div key={data.id}>
            //     <p>this is {data.message}</p>
            // </div>
            
            <NoteRow
                key = {id}
                note = {message}
            />
        ))}
   </div>
  )
}

export default NotesList