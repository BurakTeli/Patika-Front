// src/services/bookService.ts

// Import Axios for HTTP requests and types for Book and BookRequest
import axios from 'axios';
import type { Book, BookRequest } from '../types';

// Base URL for the books API endpoint
const BASE_URL = 'https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/books';

// Fetch all books from the backend
export const getAllBooks = async (): Promise<Book[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Add a new book
export const addBook = async (book: BookRequest): Promise<Book> => {
  const response = await axios.post(BASE_URL, book);
  return response.data;
};

// Update an existing book by ID
export const updateBook = async (id: number, book: BookRequest): Promise<Book> => {
  const response = await axios.put(`${BASE_URL}/${id}`, book);
  return response.data;
};

// Delete a book by ID
export const deleteBook = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
