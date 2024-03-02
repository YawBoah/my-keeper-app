import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import notes from './notes';


function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(noteList=>{
        return (
          <Note
            key={noteList.id}
            title={noteList.title}
            content={noteList.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
