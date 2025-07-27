// src/pages/BorrowBookPage.tsx

// Import necessary hooks and services
import { useEffect, useState } from "react";
import {
  getAllBorrowings,
  addBorrowing,
  deleteBorrowing,
} from "../../services/borrowService";
import { getAllBooks } from "../../services/bookService";
import type { Book, BookBorrowing, BookBorrowingRequest } from "../../types";
import "./BorrowBookPage.css";

// Main component for borrowing books
const BorrowBookPage = () => {
  // State for borrow records and book list
  const [borrowings, setBorrowings] = useState<BookBorrowing[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  // Form state for borrow request
  const [formData, setFormData] = useState<BookBorrowingRequest>({
    borrowerName: "",
    borrowerMail: "",
    borrowingDate: "",
    returnDate: "",
    bookId: 0,
  });

  // Fetch borrowings and books data from API
  const fetchData = async () => {
    const [borrowsData, booksData] = await Promise.all([
      getAllBorrowings(),
      getAllBooks(),
    ]);
    setBorrowings(borrowsData);
    setBooks(booksData);
  };

  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "bookId" ? Number(value) : value,
    }));
  };

  // Handle form submission to add a borrowing
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBorrowing(formData);
    
    // Reset form after submit
    setFormData({
      borrowerName: "",
      borrowerMail: "",
      borrowingDate: "",
      returnDate: "",
      bookId: 0,
    });
    fetchData();
  };

  // Handle deleting a borrowing record
  const handleDelete = async (id: number) => {
    await deleteBorrowing(id);
    fetchData();
  };

  return (
    <div className="borrow-container">
      <h2>Kitap Ödünç Alma</h2>

      {/* Borrowing form */}
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
        <select
          name="bookId"
          value={formData.bookId.toString()}
          onChange={handleChange}
          required
        >
          <option value="">Kitap Seçiniz</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.name}
            </option>
          ))}
        </select>
        <button type="submit">Kaydet</button>
      </form>

      {/* List of borrowed books */}
      <h3>Ödünç Alınan Kitaplar</h3>
      <ul className="borrow-list">
        {borrowings.map((item) => (
          <li key={item.id}>
            <strong>{item.borrowerName}</strong> - {item.book?.name} <br />
            {item.borrowingDate} → {item.returnDate}
            <button onClick={() => handleDelete(item.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowBookPage;
