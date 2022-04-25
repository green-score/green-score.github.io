import React from 'react';
import SearchBar from './components/SearchBar';

import './App.scss';
import Dashboard from './components/Dashboard';
import { production } from './Env';

const App = () => {
  return (
    <div className="app">
      <div className="top-bar d-flex justify-content-center align-items-center sticky-top">
        <SearchBar />
      </div>
      { production || (
        <div style={{ background: 'yellow' }}><h1><b> !!! NOT IN PRODUCTION !!! </b></h1></div>
      )}
      <Dashboard />
    </div>
  );
};

export default App;
