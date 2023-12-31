import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FontAwesomeIcon
          className="delete-icon"
          onClick={() => handleDeleteNote(id)}
          icon={faTrash}
          fontSize="1.8em"  
        />
      </div>
    </div>
  );
};

export default Note;
