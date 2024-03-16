import React from 'react'

const CreateNote = () => {
  return (
    <div className="input_note">
            <form>
                <label htmlFor="">Create a Note! </label>
                <textarea name="note_form" id="" cols="30" rows="10"></textarea>
                <button>Save Note</button>
            </form>
            
        </div>
  )
}

export default CreateNote