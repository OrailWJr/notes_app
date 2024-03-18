import Header from './components/header/header.js'
import NotesList from './components/notesList/notesList.js';
import Note from './components/note/noteRow.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import Home from './pages/Home.js';
import { AuthProvider } from './components/context/authContext/index.js';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          {/* <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} /> */}
        </Routes> 

      </BrowserRouter>
    
  )
}

export default App;