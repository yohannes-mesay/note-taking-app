import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search.jsx";
import NotesList from "./components/NotesList.jsx";
import Header from "./components/Header.jsx";
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
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes (savedNotes );
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleMode={setDarkMode} />
        <Search handleSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
