import React from "react";

function Search({ searchKeyword, onSearchChange }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchKeyword} onChange={onSearchChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
