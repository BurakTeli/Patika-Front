import axios from "axios";

const BASE_URL =
  "https://pure-jacinta-patikapluss-6fb69dd0.koyeb.app/api/v1/authors";

export const addAuthor = async (author: {
  name: string;
  birthDate: string;
  country: string;
}) => {
  const response = await axios.post(BASE_URL, author);
  return response.data;
};
