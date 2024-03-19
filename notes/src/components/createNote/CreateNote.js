import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { database } from '../firebase/firebase';
import { ref, set } from 'firebase/database';

const CreateNote = ({user}) => {


    const [note, setNote] = useState('')
    const [saveNote, setSaveNote] = useState({})

    function writeUserData(userId, email) {
      console.log("checking",userId, email)
      set(ref(database, 'users/' + userId), {
        email: email,
      });
    }
    console.log(note)
    console.log(user.user.uid)
  return (

    <Box
        display="flex"
        component="form"
        noValidate
        autoComplete="off">

        <TextField
          id="outlined-multiline-static"
        //   label="Write a Note"
          onChange={(v) => setNote(v.target.value)}
          multiline
          rows={3}
          defaultValue="Write a Note.."
        />
        <Button onClick={() =>{
            writeUserData(user.user.uid, user.user.email)
        }} variant="contained">Save</Button>
    </Box>
    
  )
}

export default CreateNote