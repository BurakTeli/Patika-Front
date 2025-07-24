import { useEffect, useState } from "react";
import {
  addAuthor,
  getAllAuthors,
  deleteAuthor,
} from "../services/authorService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/authors.css";

interface Author {
  id: number;
  name: string;
  birthDate: string;
  country: string;
}

const AuthorsPage = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [country, setCountry] = useState("");
  const [authors, setAuthors] = useState<Author[]>([]);

  const fetchAuthors = async () => {
    try {
      const data = await getAllAuthors();
      setAuthors(data);
    } catch (error) {
      toast.error("Yazarlar alınırken hata oluştu.");
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addAuthor({ name, birthDate, country });
      toast.success("Yazar başarıyla eklendi!");
      setName("");
      setBirthDate("");
      setCountry("");
      fetchAuthors();
    } catch (error) {
      toast.error("Yazar eklenirken hata oluştu.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAuthor(id);
      toast.success("Yazar silindi.");
      fetchAuthors();
    } catch (error) {
      toast.error("Silme işlemi sırasında hata oluştu.");
    }
  };

  return (
    <div className="authors-container">
      <h2>Yeni Yazar Ekle</h2>
      <form onSubmit={handleSubmit} className="author-form">
        <input
          type="text"
          placeholder="Ad Soyad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Doğum Tarihi"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ülke"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <button type="submit">Yazarı Ekle</button>
      </form>

      <h3>Yazar Listesi</h3>
      <ul className="author-list">
        {authors.map((author) => (
          <li key={author.id}>
            <span>
              <strong>{author.name}</strong> - {author.country} ({author.birthDate})
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(author.id)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorsPage;
