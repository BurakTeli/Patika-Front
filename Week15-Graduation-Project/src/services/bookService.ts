// src/services/bookService.ts

import axios from "axios";

const BASE_URL =
  "http://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/books";

export const getAllBooks = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addBook = async (book: {
  name: string;
  publicationYear: number;
  stock: number;
  author: { id: number };
  publisher: { id: number };
  categories: { id: number }[];
}) => {
  const response = await axios.post(BASE_URL, book);
  return response.data;
};

export const deleteBook = async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
