import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input className="search-bar-input" type="text" placeholder="Search" />
      <i className="bi bi-alarm search-bar-icon" />
    </div>
  );
};

export default SearchBar;
