import React from 'react';
import SearchBar from './components/search/SearchBar';

import './App.scss';
import Dashboard from './components/Dashboard';
import { PRODUCTION } from './Env';
import { WARN_FOR_DEVELOPMENT } from './Constants';

const App = () => {
  return (
    <div className="app">
      <div className="top-bar d-flex justify-content-center align-items-center sticky-top">
        <SearchBar />
      </div>
      { !PRODUCTION && WARN_FOR_DEVELOPMENT && (
        <div style={{ background: 'yellow' }}><h1><b> !!! NOT IN PRODUCTION !!! </b></h1></div>
      )}
      <Dashboard />
    </div>
  );
};

export default App;
