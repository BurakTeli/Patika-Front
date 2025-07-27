// Import Axios for HTTP requests
import axios from 'axios';

// Fetch all authors from the API
export const getAllAuthors = async () => {
  const response = await axios.get('https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/authors');
  return response.data; // Return the data from the response
};
