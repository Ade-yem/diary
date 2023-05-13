import React from "react";
import Search from "./search";

const Header = () => {
  return <h1>ToluwaN'ose Diaries</h1>;
};

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  setSearchText,
  activeNote,
  setActiveNote,
}) => {

  const sortedNotes = notes.sort((a,b)=> b.date - a.date);
  return (
    <div className="noteList">
      <div className="head">
        <header className="App-header">
          <Header />
          <i
            class="fa fa-plus fa-2x "
            aria-hidden="true"
            onClick={handleAddNote}
          ></i>
        </header>

        <Search handleSearchText={setSearchText} />
      </div>
      <div className="container"></div>
      {sortedNotes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      ))}
    </div>
  );
};

export default NotesList;

const Note = ({
  id,
  title,
  text,
  date,
  handleDeleteNote,
  setActiveNote,
  activeNote,
}) => {
  return (
    <div
      className={`note ${id === activeNote && "active"}`}
      onClick={() => setActiveNote(id)}
    >
      <h3 className="note-header"> {title} </h3>

      <div className="note-body">
        <p>{text && text.substr(0, 120) + "..."}</p>
      </div>
      <div className="note-footer">
        <span className="date">
          {new Date(date).toLocaleDateString("ng-NG", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <span>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() => handleDeleteNote(id)}
          ></i>
        </span>
      </div>
    </div>
  );
};
