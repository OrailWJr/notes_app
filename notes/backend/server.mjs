import express from 'express';
import routes from './api/routes/index.mjs';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mockUsers from './utils/mockData.mjs';
import passport from 'passport';
import './strategies/local-strategy.mjs';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect("mongodb://localhost/notes_app")
  .then(() => console.log('connected to database'))
  .catch((err) => console.log('error:', err))

  app.use(express.json());
app.use(cookieParser('helloworld'));
app.use(
  session({
    secret: 'jrTheDev',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000,

    }
  }));
app.use(passport.initialize());
app.use(passport.session())

app.use(routes)

app.get('/', (req, res) =>{
  req.session.visited = true;
  // console.log(req.session)
  // console.log(req.session.id)
  res.cookie('hello', 'world', { maxAge: 5000, signed: true})
  
  res.send('hello, world')
})

app.post('/api/auth', passport.authenticate('local'),(req, res) => {
  // const { body: {username, password} } = req;
  // const findUser = mockUsers.find((user) => user.username === username)

  // if (!findUser || findUser.password != password) return res.status(401).send({msg: 'BAD CREDENTIALS.'})
  // req.session.user = findUser;
  return res.status(200).send("Logged In")
})

app.get('/api/auth/status', (req, res) => {
  req.sessionStore.get(req.sessionID, (err, session) => {
    console.log(session)
  })
  
  return req.user ? res.status(200).send(req.user) : res.status(401).send('BAD CREDENTIALS')
})

app.post('/api/auth/logout', (req, res) => {
  if (!req.user) return req.status(401).send('NOT AUTHORIZED!')
  req.logOut((err) => {
    if (err) return res.sendStatus(401)})
    return res.sendStatus(200)
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Example ap listening on port 3000')
});