import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddNote from './components/AddNote';
import ShowNotes from './components/ShowNotes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
      setNotes([...notes, note]);
  };
  return (
    <div>
      <Navbar />
      <div className="container my-3">
        <h1>Welcome To Magic Notes</h1>
        <AddNote onAddNote={handleAddNote} />
        <hr />
        <h1>Your Notes</h1>
        <hr />
        <ShowNotes notes={notes} />
        <ShowNotes notes={notes} />
      </div>
    </div>
  );
}

export default App;
