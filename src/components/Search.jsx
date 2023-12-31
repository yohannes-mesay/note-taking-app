import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = (handleSearchText) => {
  return (
    <div class="search">
      <FontAwesomeIcon class="search-icon" icon={faSearch} size="1.8em" />
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
