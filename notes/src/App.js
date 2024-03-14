import Header from './components/header/header.js'
import NotesList from './components/notesList/notesList.js';
import Note from './components/note/noteRow.js';
function App() {
  return (
    <div className="container">
    <Header/>
    <NotesList />
    
    {/* <Note /> */}

    </div>
    
  );
}

export default App;
