import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = ({ handleSearchText }) => {
  return (
    <div class="search">
      <FontAwesomeIcon className="search-icon"
          sx={{
            position: "absolute",
            top: "calc(50% - 20px)",
            left: "calc(50% - 20px)",
          }}
          icon={faSearch}
          size="2x"/>
      <input
        onChange={(event) => {
          handleSearchText(event.target.value);
        }}
        type="text"
        placeholder="Type here to search"
      ></input>
    </div>
  );
};
export default Search;
