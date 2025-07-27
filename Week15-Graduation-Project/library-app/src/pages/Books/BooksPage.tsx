// src/pages/Books/BooksPage.tsx

// Import React hooks and necessary services
import { useEffect, useState } from "react";
import {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../../services/bookService";
import { getAllAuthors } from "../../services/getAllAuthors";
import { getAllPublishers } from "../../services/getAllPublishers";
import { getAllCategories } from "../../services/getAllCategories";
import type { Book, Author, Publisher, Category } from "../../types";
import Notification from "../../components/Notification";
import "./BooksPage.css";

// Main component for managing books
const BooksPage = () => {
  // State for books, authors, publishers, categories
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  // Form state for adding or updating a book
  const [formData, setFormData] = useState({
    name: "",
    publicationYear: new Date().getFullYear(),
    stock: 1,
    authorId: 0,
    publisherId: 0,
    categoryIds: [] as string[],
  });

  // ID of the book being edited, if any
  const [editingId, setEditingId] = useState<number | null>(null);

  // Notification state
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });

  // Function to show temporary notifications
  const showNotification = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type });
    }, 3000);
  };

  // Fetch all necessary data when the component mounts
  const fetchAll = async () => {
    try {
      const [booksRes, authorsRes, publishersRes, categoriesRes] =
        await Promise.all([
          getAllBooks(),
          getAllAuthors(),
          getAllPublishers(),
          getAllCategories(),
        ]);
      setBooks(booksRes);
      setAuthors(authorsRes);
      setPublishers(publishersRes);
      setCategories(categoriesRes);
    } catch {
      showNotification("Veriler yüklenemedi.", "error");
    }
  };

  // Run fetchAll on component mount
  useEffect(() => {
    fetchAll();
  }, []);

  // Handle input and select changes for form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "publicationYear" || name === "stock" ? Number(value) : value,
    }));
  };

  // Handle category multi-select changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prev) => ({
      ...prev,
      categoryIds: selectedOptions,
    }));
  };

  // Handle form submit for adding or updating a book
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      authorId: Number(formData.authorId),
      publisherId: Number(formData.publisherId),
      categoryIds: formData.categoryIds.map(Number),
    };

    try {
      if (editingId !== null) {
        await updateBook(editingId, submitData);
        showNotification("Kitap güncellendi.");
        fetchAll(); // Güncellemede tüm liste yenileniyor
      } else {
        const addedBook = await addBook(submitData);

        // ✅ Tip uyumu sağlandı (number olarak eşleşiyor)
        const fullBook: Book = {
          ...addedBook,
          author: authors.find((a) => a.id === Number(submitData.authorId))!, // `!` kesin var demektir
          publisher: publishers.find(
            (p) => p.id === Number(submitData.publisherId)
          )!,
          categories: categories.filter((c) =>
            submitData.categoryIds.includes(c.id)
          ),
        };

        setBooks((prev) => [...prev, fullBook]);
        showNotification("Kitap eklendi.");
      }

      // Formu sıfırla
      setFormData({
        name: "",
        publicationYear: new Date().getFullYear(),
        stock: 1,
        authorId: 0,
        publisherId: 0,
        categoryIds: [],
      });
      setEditingId(null);
    } catch {
      showNotification("İşlem başarısız.", "error");
    }
  };

  // Populate form with existing book data for editing
  const handleEdit = (book: Book) => {
    setFormData({
      name: book.name,
      publicationYear: book.publicationYear,
      stock: book.stock,
      authorId: book.author.id,
      publisherId: book.publisher.id,
      categoryIds: book.categories.map((cat) => String(cat.id)),
    });
    setEditingId(book.id);
  };

  // Handle book deletion
  const handleDelete = async (id: number) => {
    if (!confirm("Bu kitabı silmek istediğinize emin misiniz?")) return;
    try {
      await deleteBook(id);
      showNotification("Kitap silindi.");
      fetchAll();
    } catch {
      showNotification("Silme işlemi başarısız.", "error");
    }
  };

  return (
    <div className="books-container">
      <h2>Kitaplar</h2>
      {/* Notification component */}
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
      />

      {/* Book form for add/update */}
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          name="name"
          placeholder="Kitap Adı"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="publicationYear"
          placeholder="Basım Yılı"
          value={formData.publicationYear}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stok"
          value={formData.stock}
          onChange={handleChange}
          required
        />
        <select
          name="authorId"
          value={formData.authorId}
          onChange={handleChange}
          required
        >
          <option value={0}>Yazar Seç</option>
          {authors.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
        <select
          name="publisherId"
          value={formData.publisherId}
          onChange={handleChange}
          required
        >
          <option value={0}>Yayınevi Seç</option>
          {publishers.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <select
          multiple
          value={formData.categoryIds}
          onChange={handleCategoryChange}
        >
          {categories.map((c) => (
            <option key={c.id} value={c.id.toString()}>
              {c.name}
            </option>
          ))}
        </select>
        <button type="submit">
          {editingId !== null ? "Güncelle" : "Ekle"}
        </button>
      </form>

      {/* Book list */}
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <div>
              <strong>{book.name}</strong> ({book.publicationYear}) –{" "}
              {book.stock} adet
              <br />
              Yazar: {book.author?.name || "Bilinmiyor"} | Yayınevi:{" "}
              {book.publisher?.name || "Bilinmiyor"}
              <br />
              Kategoriler:{" "}
              {book.categories?.length > 0
                ? book.categories.map((cat) => cat?.name).join(", ")
                : "Yok"}
            </div>
            <div className="book-actions">
              <button onClick={() => handleEdit(book)}>Düzenle</button>
              <button onClick={() => handleDelete(book.id)}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
