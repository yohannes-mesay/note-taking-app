import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charachterLimit = 200;
  const handleChange = (event) => {
    if (charachterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
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
        <div>{charachterLimit - noteText.length} Remaining</div>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
