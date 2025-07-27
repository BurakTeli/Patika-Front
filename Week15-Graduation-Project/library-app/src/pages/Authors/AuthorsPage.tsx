// src/pages/Authors/AuthorsPage.tsx

import { useEffect, useState } from "react";
import {
  getAllAuthors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
} from "../../services/authorService";
import type { Author, AuthorRequest } from "../../types";
import Notification from "../../components/Notification";
import "./AuthorsPage.css";

const AuthorsPage = () => {
  // State to hold the list of authors
  const [authors, setAuthors] = useState<Author[]>([]);

  // State to manage form data for adding or editing an author
  const [formData, setFormData] = useState<AuthorRequest>({
    name: "",
    birthDate: "",
    country: "",
  });

  // State to store the ID of the author being edited
  const [editingId, setEditingId] = useState<number | null>(null);

  // State to manage notification messages
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });

  // Helper to show notification messages with timeout
  const showNotification = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type });
    }, 3000);
  };

  // Fetch all authors from backend
  const fetchAuthors = async () => {
    try {
      const data = await getAllAuthors();
      setAuthors(data);
    } catch (error) {
      showNotification("Yazarlar yüklenemedi.", "error");
    }
  };

  // Load authors when component mounts
  useEffect(() => {
    fetchAuthors();
  }, []);

  // Handle input changes in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for add or update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing author
        await updateAuthor(editingId, formData);
        showNotification("Yazar güncellendi.");
      } else {
        // Add new author
        await addAuthor(formData);
        showNotification("Yazar eklendi.");
      }
      // Reset form and refresh author list
      setFormData({ name: "", birthDate: "", country: "" });
      setEditingId(null);
      fetchAuthors();
    } catch (error) {
      showNotification("İşlem sırasında bir hata oluştu.", "error");
    }
  };

  // Populate form fields with author data for editing
  const handleEdit = (author: Author) => {
    setFormData({
      name: author.name,
      birthDate: author.birthDate,
      country: author.country,
    });
    setEditingId(author.id);
  };

  // Delete author with confirmation
  const handleDelete = async (id: number) => {
    if (!confirm("Yazarı silmek istediğine emin misin?")) return;
    try {
      await deleteAuthor(id);
      showNotification("Yazar silindi.");
      fetchAuthors();
    } catch (error) {
      showNotification("Silme işlemi sırasında hata oluştu.", "error");
    }
  };

  return (
    <div className="authors-container">
      <h2>Yazarlar</h2>

      {/* Notification message component */}
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
      />

      {/* Author add/edit form */}
      <form onSubmit={handleSubmit} className="author-form">
        <input
          type="text"
          name="name"
          placeholder="Ad Soyad"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Ülke"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? "Güncelle" : "Ekle"}</button>
      </form>

      {/* Author list display */}
      <ul className="author-list">
        {authors.map((author) => (
          <li key={author.id} className="author-item">
            <div>
              <strong>{author.name}</strong> ({author.birthDate}) -{" "}
              {author.country}
            </div>
            <div className="author-actions">
              <button onClick={() => handleEdit(author)}>Düzenle</button>
              <button onClick={() => handleDelete(author.id)}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorsPage;
