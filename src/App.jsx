import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList.jsx";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is first text",
      date: "11/11/2023",
    },
    {
      id: nanoid(),
      text: "This is second text",
      date: "11/11/2023",
    },
    {
      id: nanoid(),
      text: "This is third text",
      date: "11/11/2023",
    },
    {
      id: nanoid(),
      text: "This is forth text",
      date: "22/11/2023",
    },
  ]);
  const addNote = (text) => {
const date=new Date()
const newNote={
 id:nanoid(),
 text:text,
 date:date.toLocaleDateString()
};
const newNotes=[...notes,newNote];
setNotes(newNotes);
  };
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
