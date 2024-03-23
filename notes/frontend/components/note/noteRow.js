import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons'
import './noteRow.css' // Ensure this line points to the correct path of your new CSS file
import { database } from '../firebase/firebase'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { Button, Checkbox, IconButton, Star } from '@mui/material'
import { Label } from '@mui/icons-material'
import StarBorderIcon from '@mui/icons-material/Star'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import useConfirm from './confirmDialog'
import { Bookmark } from '@mui/icons-material'
const NoteRow = ({note}) => {

  const [updatedNote, setUpdatedNote] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const noteUpdate = doc(database, 'users', note.id);
  const [Dialog, confirmDelete] = useConfirm(
    'Are you sure?',
    'Are you sure you want to delete this Note?'
  );

  const handleSaveUpdate = async () => {
    if (!updatedNote == ''){
      await updateDoc(noteUpdate, {
    note: updatedNote
    })
    setIsUpdating(!isUpdating)
    return
  };
    setIsUpdating(!isUpdating)
  }

  const handleBookmark = async () => {
    console.log('were were ')
    await updateDoc(noteUpdate, {
      bookmark: !bookmark, // Toggle the bookmark state
    });
    setBookmark(!bookmark); // Update the local state
    return;
  }
    

  const handleConfirm = async () => {
    const ans = await confirmDelete()
    console.log("answer",ans)
    if (ans) {
      handleDelete()
    }
    return
  }
  
  const handleDelete = async () => {
      await deleteDoc(noteUpdate)
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
          <IconButton
            size="small"
            edge="start"
            color="primary"
            aria-label="favorite"
            sx={{ mr: 2 }}
            
            onClick={handleBookmark}
          >
          {!note.bookmark &&  
            <BookmarkBorderOutlinedIcon
             />}
            {note.bookmark &&  
            <Bookmark
            color="primary"
             />}
          </IconButton>
          
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
          <IconButton
            size="small"
            edge="start"
            color="primary"
            aria-label="favorite"
            sx={{ mr: 2 }}
            onClick={handleBookmark}
          >
           {!note.bookmark &&  
            <BookmarkBorderOutlinedIcon
             />}
            {note.bookmark &&  
            <Bookmark
             />}
          </IconButton>
        </div>
        <div className="note_snippet" onClick={handleUpdate}>
          <h1>{note.title}</h1>
          <p>{note.note}</p>
        </div>
          <div className="note_settings_right">
            <Button size="small" onClick={handleSaveUpdate}>Edit</Button>
            <Button size="small" onClick={handleConfirm} color='error'>Delete</Button>
            <Dialog />
          </div>
      </div>
  )
}

export default NoteRow
