import React from 'react';
import SearchBar from './components/SearchBar';

import './App.scss';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="app">
      <div className="top-bar d-flex justify-content-center align-items-center sticky-top">
        <SearchBar />
      </div>
      <Dashboard />
    </div>
  );
};

export default App;
