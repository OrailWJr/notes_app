import express from 'express';
import routes from './api/routes/index.mjs';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mockUsers from './utils/mockData.mjs';
import passport from 'passport';


const app = express();
app.use(express.json());
app.use(cookieParser('helloworld'));
app.use(
  session({
    secret: 'jrTheDev',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: (60000 * 60) * 24,

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

app.post('/api/auth', (req, res) => {
  const { body: {username, password} } = req;
  const findUser = mockUsers.find((user) => user.username === username)

  if (!findUser || findUser.password != password) return res.status(401).send({msg: 'BAD CREDENTIALS.'})
  req.session.user = findUser;
  return res.status(200).send(findUser)
})

app.get('/api/auth/status', (req, res) => {
  req.sessionStore.get(req.sessionID, (err, session) => {
    console.log(session)
  })
  return res.status(200).send(req.session.user)
  

})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Example ap listening on port 3000')
});