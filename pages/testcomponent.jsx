import React, { useEffect, useState } from 'react';
import ResultsComponenet from './resultsComponent';
import axios from 'axios';
import handler from './api/serverlessFunction';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Function to handle search input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Perform your search logic here and update the results state
    // For example, you can fetch results from an API based on the input
    // For simplicity, let's assume you have a static list of options

    const fakeResults = [<ResultsComponenet query={query}/>
];

    // Filter the results based on the input value
    const filteredResults = fakeResults.filter(
      (result) => result.name.toLowerCase().includes(value.toLowerCase())
    );

    

    setResults(filteredResults);
  };

  // Function to handle item selection
  const handleItemSelect = (selectedItem) => {
    setQuery(selectedItem.name);
    // You can perform additional actions here when an item is selected
    // For example, you might want to clear the results or navigate to a new page
    setResults([]);
  };

  return (
    <div>
      <h2>Search:</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />

      {/* Autocomplete dropdown */}
      {query.length > 0 && (
        <div className="autocomplete-dropdown">
          <ul>
            {results.map((result, index) => (
              <li key={index} onClick={() => handleItemSelect(result)}>
                {result.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
