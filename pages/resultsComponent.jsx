// ResultsComponent.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const ResultsComponent = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query) {
          // Make a request to the API route (serverless function) using Axios
          const response = await axios.get(`/api/serverlessFunction?q=${query}`);
          const resultsArray = response.data;
          setResults(resultsArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);
  return (
    <div>
      <ul>
        {results.sort((a, b) => a.name.localeCompare(b.name)).map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsComponent;
