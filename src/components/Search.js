import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input onChange={(e)=> props.handleChangeSearchText(e)}
        // id="search-bar"
        type="text"
        placeholder="Search Candidates"
      />
    </div>
  );
}

export default Search;
