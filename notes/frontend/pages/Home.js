import React, { useEffect, useState } from 'react';
import NotesList from '../components/notesList/notesList';
import CreateNote from '../components/createNote/CreateNote';
import { database } from '../components/firebase/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import './home.css'
import Header from '../components/header/header';




const Home = ({ user }) => {
  const [notes, setNotes] = useState([]);
  const notesQuery = query(collection(database, "users"), where("uid", "==", user.uid));
   
 


  useEffect(() => {
    const unsubscribe = onSnapshot(notesQuery, (querySnapshot) => {
      const notesArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('useEffect Fired')
      setNotes(notesArray);
    }, (error) => {
      console.error('Snapshot listening error:', error);
    },);

    return () => unsubscribe();
  }, [user.uid]); // Dependency array includes user.uid to re-run effect if user changes

  return (
    <div className="home-main-container">
      <Header />
      <div className="home-container">
      
      <div className='home-notes-container'>
        <div className="smallElement">
          <NotesList user={user} notes={notes} />
        </div>
        <div className="largeElement">
          <CreateNote user={user} />
        </div>
        
        
        
        
      </div>
      
     
    </div>
    </div>
    
  );
};

export default Home;
