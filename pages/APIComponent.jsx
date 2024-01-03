// ApiComponent.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/serverlessFunction');

      // Assuming the API response has a property named 'games' which is an array
      const gamesArray = response.data.results.games;

      // Ensure gamesArray is an array before sorting
      if (Array.isArray(gamesArray)) {
        // Sort by 'id' first, then by 'name'
        const sortedData = sortData(gamesArray);
        setData(sortedData);
      } else {
        console.error('API response does not contain a "games" array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sortData = (gamesArray) => {
    // Sort by 'id' first, then by 'name'
    return gamesArray.sort((a, b) => {
      // Sorting by 'id'
      if (a.id !== b.id) {
        return a.id - b.id;
      }

      // If 'id' is the same, sort by 'name'
      return a.name.localeCompare(b.name);
    });
  };

  return (
    <div>
      <h1>Sorted Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;
