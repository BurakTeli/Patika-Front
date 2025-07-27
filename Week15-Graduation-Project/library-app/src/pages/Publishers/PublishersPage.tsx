// src/pages/Publishers/PublishersPage.tsx

// Import React hooks, services, types, components, and styles
import { useEffect, useState } from "react";
import {
  getAllPublishers,
  addPublisher,
  updatePublisher,
  deletePublisher,
} from "../../services/publisherService";
import type { Publisher, PublisherRequest } from "../../types";
import Notification from "../../components/Notification";
import "./PublishersPage.css";

// Main component for managing publishers
const PublishersPage = () => {
  // State to store list of publishers
  const [publishers, setPublishers] = useState<Publisher[]>([]);

  // State for the form fields (add/update)
  const [formData, setFormData] = useState<PublisherRequest>({
    name: "",
    establishmentYear: 2000,
    address: "",
  });

  // Stores the ID of the publisher being edited
  const [editingId, setEditingId] = useState<number | null>(null);

  // Notification state to display feedback messages
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });

  // Show a notification message with timeout
  const showNotification = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type });
    }, 3000);
  };

  // Fetch all publishers from the API
  const fetchPublishers = async () => {
    try {
      const data = await getAllPublishers();
      setPublishers(data);
    } catch {
      showNotification("Yayınevleri yüklenemedi.", "error");
    }
  };

  // Run once when the component is mounted
  useEffect(() => {
    fetchPublishers();
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "establishmentYear" ? Number(value) : value,
    }));
  };

  // Handle form submission to add or update a publisher
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId !== null) {
        await updatePublisher(editingId, formData);
        showNotification("Yayınevi güncellendi.");
      } else {
        await addPublisher(formData);
        showNotification("Yayınevi eklendi.");
      }

      // Reset form and refresh list
      setFormData({ name: "", establishmentYear: 2000, address: "" });
      setEditingId(null);
      fetchPublishers();
    } catch {
      showNotification("İşlem sırasında hata oluştu.", "error");
    }
  };

  // Load selected publisher data into form for editing
  const handleEdit = (publisher: Publisher) => {
    setFormData({
      name: publisher.name,
      establishmentYear: publisher.establishmentYear,
      address: publisher.address,
    });
    setEditingId(publisher.id);
  };

  // Delete a publisher by ID
  const handleDelete = async (id: number) => {
    if (!confirm("Bu yayınevini silmek istediğinize emin misiniz?")) return;
    try {
      await deletePublisher(id);
      showNotification("Yayınevi silindi.");
      fetchPublishers();
    } catch {
      showNotification("Silme işlemi başarısız.", "error");
    }
  };

  return (
    <div className="publishers-container">
      <h2>Yayınevleri</h2>

      {/* Notification message */}
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
      />

      {/* Form for adding or editing publisher */}
      <form onSubmit={handleSubmit} className="publisher-form">
        <input
          type="text"
          name="name"
          placeholder="Yayınevi Adı"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="establishmentYear"
          placeholder="Kuruluş Yılı"
          value={formData.establishmentYear}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Adres"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editingId !== null ? "Güncelle" : "Ekle"}
        </button>
      </form>

      {/* List of publishers */}
      <ul className="publisher-list">
        {publishers.map((publisher) => (
          <li key={publisher.id} className="publisher-item">
            <div>
              <strong>{publisher.name}</strong> ({publisher.establishmentYear})
              - {publisher.address}
            </div>
            <div className="publisher-actions">
              <button onClick={() => handleEdit(publisher)}>Düzenle</button>
              <button onClick={() => handleDelete(publisher.id)}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublishersPage;
