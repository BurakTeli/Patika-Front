// Import Axios to handle HTTP requests
import axios from 'axios';

// Fetch all publishers from the API
export const getAllPublishers = async () => {
  const response = await axios.get('https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/publishers');
  return response.data; // Return the fetched data
};
