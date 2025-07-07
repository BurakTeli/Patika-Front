// src/services/PlanetsService.ts

import axios from "axios";

const BASE_URL = "https://www.swapi.tech/api";

// 🔧 Added: Fetches list of planets from SWAPI
export const getPlanetsList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/planets`);
    return response.data.results; // 📌 Returns array of { name, uid, url }
  } catch (error) {
    console.error("Error fetching planets:", error);
    return [];
  }
};
