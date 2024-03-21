
import NotesList from './components/notesList/notesList.js';
import Note from './components/note/noteRow.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn.js';
// import SignUp from './pages/SignUp.js';
import Home from './pages/Home.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { ProtectedRoute } from './components/protectedRoute.js';
import { auth } from './components/firebase/firebase.js';
import SignInMui from './pages/SignUp.js'; 
import Header from './components/header/header.js';
function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState('true');
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
      if (user) {
        setUser(user)
        setIsFetching(false)
        return;
      }
      setUser(null);
      console.log('user is null', user)
      setIsFetching(false)
    })
    return () => unsubscribe()
  }, [])


  if(isFetching) {
    return <h2>Loading...</h2>
  }
 
  return (

    <BrowserRouter>
    <Header user={user}/>
        <Routes>
          <Route index path='/signup'  element={<SignInMui user={user}/>} />
          <Route index path='/signin'  element={<SignIn user={user}/>} />
          <Route 
              path='/home' element={
              <ProtectedRoute user={user}>
                <Home user={user}></Home>
                </ProtectedRoute>} />
          {/* <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} /> */}
        </Routes> 
        </BrowserRouter>

    
  )
}

export default App;
