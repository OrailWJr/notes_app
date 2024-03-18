import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';


const CreateNote = () => {

    const [note, setNote] = useState('')
    const [saveNote, setSaveNote] = useState({})

    console.log(note)
    console.log(saveNote)
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
            setSaveNote({...saveNote, "note Message": note})
        }} variant="contained">Save</Button>
    </Box>
    
  )
}

export default CreateNote