import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <i className="bi bi-alarm search-bar-icon" />
      <input className="search-bar-input" type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
