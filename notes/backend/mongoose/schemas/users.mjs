import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    lname: {
        type: mongoose.Schema.Types.String,
        required: true,
    }, 
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    }

});

// const notesSchema = new Schema({
//     title: {
//         type: mongoose.Schema.Types.String,
//         required: true,
//     },
//     date: {
//         type: mongoose.Schema.Types.Date,
//     },
//     note_message: {
//         type: mongoose.Schema.Types.String,
//         required: true,
//     }

// });

// export const Note = mongoose.model('Note', notesSchema);
export const User = mongoose.model('User', userSchema);