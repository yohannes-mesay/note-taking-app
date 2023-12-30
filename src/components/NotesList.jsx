import Note from "./Note.jsx";
import AddNote from "./AddNote.jsx";
const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="noteslist">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NotesList;
