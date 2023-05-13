import "./App.css";
import React, { useEffect } from "react";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";


const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      title: "",
      text: "",
      date: Date.now(),
      id: nanoid(),
    };
    setNotes([newNote, ...notes]);
  };
  const deleteNote = (id) => {
    const newN = notes.filter((note) => note.id !== id);
    setNotes(newN);
  };

  const [searchText, setSearchText] = useState("");

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const returnNote = () => {
    setActiveNote(false);
  };

  const onUpdateNote = (updatedNote) => {
    const updateNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updateNotesArray);
  };

  return (
    <div className="App">
      <NotesList
        notes={notes.filter((note) =>
          note.title.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleSearchText={setSearchText}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Notes
        activeNote={getActiveNote()}
        returnNote={returnNote}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
};

export default App;
