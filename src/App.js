import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';

function App() {
  return (
    <div className="App">
     <Header/>
     <Note />
     <Note />
     <Footer />
    </div>
  );
}

export default App;
