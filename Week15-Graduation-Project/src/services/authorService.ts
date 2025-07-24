import axios from "axios";

const BASE_URL =
  "https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/authors";

// Yeni yazar ekle
export const addAuthor = async (author: {
  name: string;
  birthDate: string;
  country: string;
}) => {
  const response = await axios.post(BASE_URL, author);
  return response.data;
};

// Tüm yazarları getir
export const getAllAuthors = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Belirli bir yazarı ID ile getir
export const getAuthorById = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Var olan bir yazarı güncelle
export const updateAuthor = async (
  id: number,
  updatedAuthor: {
    name: string;
    birthDate: string;
    country: string;
  }
) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedAuthor);
  return response.data;
};

// Yazarı ID ile sil
export const deleteAuthor = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
