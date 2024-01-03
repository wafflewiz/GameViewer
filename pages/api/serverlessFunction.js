// pages/api/data.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://www.giantbomb.com/api/franchise/3025-333/?api_key=XXXX');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
