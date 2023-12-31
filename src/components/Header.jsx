import React from "react";
const Header = ({ handleToggleMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => handleToggleMode((prevMode) => !prevMode)}
        className="save"
      >
        Toggle mode
      </button>
    </div>
  );
};
export default Header;
