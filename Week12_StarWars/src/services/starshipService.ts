// src/services/StarshipService.ts
import axios from "axios";

const BASE_URL = "https://www.swapi.tech/api";

export const getStarshipList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/starships`);
    return response.data.results; // starships array (with name, uid, url)
  } catch (error) {
    console.error("Error fetching starships:", error);
    return [];
  }
};
