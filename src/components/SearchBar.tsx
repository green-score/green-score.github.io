import React, { useState } from 'react';
import { debounce } from 'lodash';

const SEARCH_DEBOUNCE_TIME = 800;

// const SearchBarResult = () => (
//   <div>
//
//   </div>
// );

const SearchBar = () => {
  const onChange = (e: { target: { value: any; }; }) => {

  };

  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search"
        onChange={debounce(onChange, SEARCH_DEBOUNCE_TIME)}
      />
      <i className="bi bi-search search-bar-icon" />
    </div>
  );
};

export default SearchBar;
