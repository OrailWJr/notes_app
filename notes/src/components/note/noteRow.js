import React from 'react'
import './noteRow.css'
const NoteRow = (note) => {

  return (
    <div className="note_row">
      <div className="edit_note">e</div>
      <div className="delete_note">x</div>
        {console.log("this is note card", note)}
          <h1>{note.id}</h1>
            <p>{note.note}</p>

        {/* <div className="note_row_options">
            <div className="checkbox">cm</div>
            <div className="starred">*</div>
        </div>
        <div className="note_preview">
            {notes}
        </div>
        <div className="note_date">
            hello {dates}
        </div> */}
        
    </div>
  )
}

export default NoteRow