// src/pages/BorrowBookPage.tsx

import { useEffect, useState } from "react";
import {
  getAllBorrowings,
  addBorrowing,
  deleteBorrowing,
} from "../../services/borrowService";
import { getAllBooks } from "../../services/bookService";
import type { Book, BookBorrowing, BookBorrowingRequest } from "../../types";
import "./BorrowBookPage.css";

const BorrowBookPage = () => {
  const [borrowings, setBorrowings] = useState<BookBorrowing[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [formData, setFormData] = useState<BookBorrowingRequest>({
    borrowerName: "",
    borrowerMail: "",
    borrowingDate: "",
    returnDate: "",
    bookId: 0,
  });

  const fetchData = async () => {
    try {
      const [borrowsData, booksData] = await Promise.all([
        getAllBorrowings(),
        getAllBooks(),
      ]);

      // Konsola kitapları yaz ve name'i olmayanları filtrele
      console.log("Kitaplar (API'den gelen):", booksData);
      const validBooks = booksData.filter((book) => book.name);
      setBooks(validBooks);
      setBorrowings(borrowsData);
    } catch (error) {
      console.error("Veriler yüklenemedi:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "bookId" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addBorrowing(formData);
      setFormData({
        borrowerName: "",
        borrowerMail: "",
        borrowingDate: "",
        returnDate: "",
        bookId: 0,
      });
      fetchData();
    } catch (error) {
      console.error("Ekleme başarısız:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteBorrowing(id);
      fetchData();
    } catch (error) {
      console.error("Silme başarısız:", error);
    }
  };

  return (
    <div className="borrow-container">
      <h2>Kitap Ödünç Alma</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="borrowerName"
          placeholder="Ad Soyad"
          value={formData.borrowerName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="borrowerMail"
          placeholder="E-posta"
          value={formData.borrowerMail}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="borrowingDate"
          value={formData.borrowingDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          required
        />

        {/* Kitap Seçimi */}
        <select
          name="bookId"
          value={formData.bookId}
          onChange={handleChange}
          required
        >
          <option value={0}>📚 Kitap Seçiniz</option>
          {books.length === 0 ? (
            <option disabled>Kitap bulunamadı veya yüklenemedi</option>
          ) : (
            books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.name}
              </option>
            ))
          )}
        </select>

        <button type="submit">Kaydet</button>
      </form>

      <h3>Ödünç Alınan Kitaplar</h3>
      <ul className="borrow-list">
        {borrowings.map((item) => (
          <li key={item.id}>
            <strong>{item.borrowerName}</strong> –{" "}
            {item.book?.name || "Kitap silinmiş"} <br />
            {item.borrowingDate} → {item.returnDate}
            <button onClick={() => handleDelete(item.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowBookPage;
