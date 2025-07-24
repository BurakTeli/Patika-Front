import axios from "axios";
import { Publisher } from "../types";

// Base URL for the backend API
const BASE_URL = "https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1";

/**
 * Fetch all publishers from the backend.
 */
export const getAllPublishers = async (): Promise<Publisher[]> => {
  const response = await axios.get(`${BASE_URL}/publisher`);
  return response.data;
};

/**
 * Fetch a single publisher by ID.
 * @param id Publisher ID
 */
export const getPublisherById = async (id: number): Promise<Publisher> => {
  const response = await axios.get(`${BASE_URL}/publishers/${id}`);
  return response.data;
};

/**
 * Create a new publisher.
 * @param publisher Publisher data (without ID)
 */
export const createPublisher = async (publisher: Omit<Publisher, "id">) => {
  const response = await axios.post(`${BASE_URL}/publisher`, publisher);
  return response.data;
};

/**
 * Update an existing publisher by ID.
 * @param id Publisher ID
 * @param updated Updated publisher data (without ID)
 */
export const updatePublisher = async (
  id: number,
  updated: Omit<Publisher, "id">
) => {
  const response = await axios.put(`${BASE_URL}/publisher/${id}`, updated);
  return response.data;
};

/**
 * Delete a publisher by ID.
 * @param id Publisher ID
 */
export const deletePublisher = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/publisher/${id}`);
  return response.data;
};
