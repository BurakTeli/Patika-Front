// src/services/categoryService.ts

// Import Axios for HTTP requests and CategoryRequest type
import axios from 'axios';
import type { CategoryRequest } from '../types';

// Base URL for the categories API endpoint
const BASE_URL = 'https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/categories';

// Fetch all categories
export const getAllCategories = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Add a new category
export const addCategory = async (category: CategoryRequest) => {
  const response = await axios.post(BASE_URL, category);
  return response.data;
};

// Update an existing category by ID
export const updateCategory = async (id: number, category: CategoryRequest) => {
  const response = await axios.put(`${BASE_URL}/${id}`, category);
  return response.data;
};

// Delete a category by ID
export const deleteCategory = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
