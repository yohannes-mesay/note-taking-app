const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <p>Delete</p>
      </div>
    </div>
  );
};
export default Note;
