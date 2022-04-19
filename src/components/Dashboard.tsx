import React from 'react';
import PostFeed from './news/PostFeed';
import SearchBar from './SearchBar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SearchBar />
      <PostFeed />
    </div>
  );
};

export default Dashboard;
