// src/pages/BooksPage.tsx

import React, { useEffect, useState } from "react";
import { getAllBooks, addBook, deleteBook } from "../services/bookService";
import "../styles/books.css";

interface Book {
  id: number;
  name: string;
  publicationYear: number;
  stock: number;
  author: {
    id: number;
    name?: string;
    birthDate?: string;
    country?: string;
  };
  publisher: {
    id: number;
    name?: string;
    establishmentYear?: number;
    address?: string;
  };
  categories: {
    id: number;
    name?: string;
    description?: string;
  }[];
}

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    publicationYear: "",
    stock: "",
    authorId: "",
    publisherId: "",
    categoryId: "",
  });

  const fetchBooks = async () => {
    const data = await getAllBooks();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddBook = async () => {
    const newBook = {
      name: formData.name,
      publicationYear: Number(formData.publicationYear),
      stock: Number(formData.stock),
      author: {
        id: Number(formData.authorId),
        name: "", // Swagger dummy data
        birthDate: new Date().toISOString().split("T")[0],
        country: "",
      },
      publisher: {
        id: Number(formData.publisherId),
        name: "",
        establishmentYear: 0,
        address: "",
      },
      categories: [
        {
          id: Number(formData.categoryId),
          name: "",
          description: "",
        },
      ],
    };

    await addBook(newBook);
    fetchBooks();

    setFormData({
      name: "",
      publicationYear: "",
      stock: "",
      authorId: "",
      publisherId: "",
      categoryId: "",
    });
  };

  const handleDeleteBook = async (id: number) => {
    await deleteBook(id);
    fetchBooks();
  };

  return (
    <div className="books-container">
      <h2>📚 Kitaplar</h2>
      <div className="book-form">
        <input
          type="text"
          name="name"
          placeholder="Kitap Adı"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="publicationYear"
          placeholder="Yayın Yılı"
          value={formData.publicationYear}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stok"
          value={formData.stock}
          onChange={handleChange}
        />
        <input
          type="number"
          name="authorId"
          placeholder="Author ID"
          value={formData.authorId}
          onChange={handleChange}
        />
        <input
          type="number"
          name="publisherId"
          placeholder="Publisher ID"
          value={formData.publisherId}
          onChange={handleChange}
        />
        <input
          type="number"
          name="categoryId"
          placeholder="Category ID"
          value={formData.categoryId}
          onChange={handleChange}
        />
        <button onClick={handleAddBook}>Ekle</button>
      </div>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.name}</strong> – {book.publicationYear} – Stok:{" "}
            {book.stock}
            <button onClick={() => handleDeleteBook(book.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
