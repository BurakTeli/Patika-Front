// src/services/publisherService.ts

// Import Axios for making HTTP requests and the PublisherRequest type
import axios from 'axios';
import type { PublisherRequest } from '../types';

// Base URL for all publisher-related API operations
const BASE_URL = 'https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/publishers';

// Fetch all publishers from the backend
export const getAllPublishers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Add a new publisher
export const addPublisher = async (publisher: PublisherRequest) => {
  const response = await axios.post(BASE_URL, publisher);
  return response.data;
};

// Update an existing publisher by ID
export const updatePublisher = async (id: number, publisher: PublisherRequest) => {
  const response = await axios.put(`${BASE_URL}/${id}`, publisher);
  return response.data;
};

// Delete a publisher by ID
export const deletePublisher = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
