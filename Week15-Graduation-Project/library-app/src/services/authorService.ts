// src/services/authorService.ts

// Import Axios for HTTP requests and AuthorRequest type
import axios from "axios";
import type { AuthorRequest } from "../types";

// Base URL for the authors API endpoint
const BASE_URL =
  "https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/authors";

// Get all authors from the backend
export const getAllAuthors = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Get a specific author by ID
export const getAuthorById = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Add a new author
export const addAuthor = async (author: AuthorRequest) => {
  const response = await axios.post(BASE_URL, author);
  return response.data;
};

// Update an existing author by ID
export const updateAuthor = async (id: number, author: AuthorRequest) => {
  const response = await axios.put(`${BASE_URL}/${id}`, author);
  return response.data;
};

// Delete an author by ID
export const deleteAuthor = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
