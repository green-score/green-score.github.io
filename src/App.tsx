import React from 'react';
import SearchBar from './components/SearchBar';
import PostFeed from './components/news/PostFeed';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <SearchBar />
      <PostFeed />
    </div>
  );
};

export default App;
