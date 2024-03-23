import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { database } from '../firebase/firebase';
import { ref, set } from 'firebase/database';
import { collection, addDoc } from "firebase/firestore"; 

const CreateNote = ({user}) => {

  console.log('this is user', user)
    const [note, setNote] = useState('')
    const [saveNote, setSaveNote] = useState({})

    const handleCreateNote = async () => {
      try {
      const docRef = await addDoc(collection(database, "users"), {
        email: user.email,
        note: note,
        uid: user.uid,
        bookmark: false,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    }
    

  return (

    <Box
        display="flex"
        flexDirection="column"
        component="form"
        noValidate
        autoComplete="off">

        <TextField
          id="outlined-multiline-static"
        //   label="Write a Note"
          onChange={(v) => setNote(v.target.value)}
          multiline
          rows={10}
          defaultValue="Write a Note.."
        />
        <Button onClick={handleCreateNote} variant="contained">Save</Button>
    </Box>
    
  )
}

export default CreateNote