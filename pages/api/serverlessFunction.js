// pages/api/search.js
import axios from 'axios';

export default async function handler(req, res) {
  const { q } = req.query;

  try {
    const response = await axios.get(`https://www.giantbomb.com/api/search/?api_key=b6d470221c6f596cf11087c78b0a4f6471ae924e&query=${q}&format=json&field_list=name&resources=game&resource_type=game`);
    const results = response.data.results;

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching data:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
