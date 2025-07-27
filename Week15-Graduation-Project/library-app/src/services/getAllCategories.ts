// Import Axios to make HTTP requests
import axios from "axios";

// Fetch all categories from the API
export const getAllCategories = async () => {
  const response = await axios.get(
    "https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/categories"
  );
  return response.data; // Return the response data
};
