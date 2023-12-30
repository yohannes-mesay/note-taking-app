import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveClick=()=>{
    handleAddNote(noteText);
  }
  return (
    <div className="note new">
      <textarea
        row="8px"
        cols="12px"
        placeholder="Type your text here"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <div>200 Remaining</div>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};
export default AddNote;
