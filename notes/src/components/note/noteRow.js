import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons'
import './noteRow.css'
const NoteRow = (note) => {

  return (
      <div className="note_row">
          <div className="note_settings_left">
            <FontAwesomeIcon icon={faSquare} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="note_snippet">
            <h1>{note.id}</h1>
            <p>{note.note}</p>
          </div>
          
          <div className="note_settings_right">
            <div className="edit_note">e</div>
            <div className="delete_note">x</div>
          </div>
        
      </div>
  )
}

export default NoteRow