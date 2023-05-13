import React from "react";

const Notes = ({ activeNote, returnNote, onUpdateNote }) => {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      date: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  return (
    <div className="notes">
      <div className="notes-head">
        <button className="save">
          <i
            class="fa fa-arrow-left"
            aria-hidden="true"
            onClick={returnNote}
          ></i>
        </button>
        <button
          className="save"
          // onClick={removeFocus}
        >
          <i class="fa fa-check" aria-hidden="true"></i>
        </button>
      </div>
      <div className="texts">
        <textarea
          placeholder="title"
          className="note-header"
          autoFocus
          onChange={(e) => onEditField("title", e.target.value)}
          value={activeNote.title}
        />
        <textarea
          placeholder="Type to add note..."
          id="notes-body"
          value={activeNote.text}
          onChange={(e) => onEditField("text", e.target.value)}
        />

        {/* <h1>{activeNote.title}</h1> */}
      </div>
    </div>
  );
};

export default Notes;

