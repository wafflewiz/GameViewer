// SearchComponent.js
import React, { useState } from 'react';
import ResultsComponent from './resultsComponent';

const SearchComponent = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Perform the search, and pass the query to the ResultsComponent
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ResultsComponent query={query} />
    </div>
  );
};

export default SearchComponent;
