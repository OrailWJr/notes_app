import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons'
import './noteRow.css' // Ensure this line points to the correct path of your new CSS file
import { database } from '../firebase/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { Button, Checkbox, Star } from '@mui/material'
import { Label } from '@mui/icons-material'
import StarBorderIcon from '@mui/icons-material/Star'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const NoteRow = ({note}) => {

  const [updatedNote, setUpdatedNote] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const noteUpdate = doc(database, 'users', note.id);

  const handleSaveUpdate = async () => {
    if (!updatedNote == ''){
      await updateDoc(noteUpdate, {
    note: updatedNote
    })
    return
  };
    setIsUpdating(!isUpdating)
  }

  const handleUpdate = async () => {
    setIsUpdating(!isUpdating)
  }

  if (isUpdating) {
    return (
      <div className="note_row" >
        <div className="note_settings_left">
          <Checkbox  />
          <FavoriteBorderOutlinedIcon />
        </div>
        <div className="note_snippet">
          <input type="text" placeholder={note.note} onChange={(v) => setUpdatedNote(v.target.value)}/>
        </div>
        <div className="note_settings_right">
          <Button size="small" onClick={handleSaveUpdate} color='success'>Save</Button>
          <Button size="small" onClick={handleUpdate}>Cancel</Button>
        </div>
      </div>
    )
  }

  return (
      <div className="note_row" >
        <div className="note_settings_left">
          <Checkbox  />
          <FavoriteBorderOutlinedIcon />
          {/* <FontAwesomeIcon icon={faStar} /> */}
        </div>
        <div className="note_snippet" onClick={handleUpdate}>
          <h1>{note.title}</h1>
          <p>{note.note}</p>
        </div>
          <div className="note_settings_right">
            <Button size="small" onClick={handleSaveUpdate}>Edit</Button>
            <Button size="small" onClick={handleUpdate} color='error'>Delete</Button>
          </div>
      </div>
  )
}

export default NoteRow
