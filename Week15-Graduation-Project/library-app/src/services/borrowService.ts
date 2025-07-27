// src/services/borrowService.ts

// Import Axios and the BookBorrowingRequest type
import axios from 'axios';
import type { BookBorrowingRequest } from '../types';

// Base URL for the borrowings API endpoint
const BASE_URL = 'https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/book-borrowings';

// Get all borrow records
export const getAllBorrowings = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Get a specific borrow record by ID
export const getBorrowingById = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Add a new borrow record
export const addBorrowing = async (data: BookBorrowingRequest) => {
  const response = await axios.post(BASE_URL, data);
  return response.data;
};

// Update an existing borrow record by ID
export const updateBorrowing = async (id: number, data: BookBorrowingRequest) => {
  const response = await axios.put(`${BASE_URL}/${id}`, data);
  return response.data;
};

// Delete a borrow record by ID
export const deleteBorrowing = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
