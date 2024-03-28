import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true
    },
    lname: {
        type: Schema.Types.String,
        required: true,
    }, 
    password: {
        type: Schema.Types.String,
        required: true,
    }

})