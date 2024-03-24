import express from 'express';
import userRouter from './api/routes/users.mjs';
import notesRouter from './api/routes/notes.mjs';
import { json } from 'express';

const app = express();
app.use(express.json())



// app.get('/', (req, res) =>{
//   console.log("This is test", req.query);
//   res.send('hello')
// })
app.use(userRouter);
app.use(notesRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port 3000`)
});