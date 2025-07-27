// src/pages/Categories/CategoriesPage.tsx

// Import hooks, services, types, components and styles
import { useEffect, useState } from 'react';
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from '../../services/categoryService';
import type { Category, CategoryRequest } from '../../types';
import Notification from '../../components/Notification';
import './CategoriesPage.css';

// Main component for managing book categories
const CategoriesPage = () => {
  // State for category list
  const [categories, setCategories] = useState<Category[]>([]);

  // State for form data (add/edit)
  const [formData, setFormData] = useState<CategoryRequest>({
    name: '',
    description: '',
  });

  // ID of the category being edited
  const [editingId, setEditingId] = useState<number | null>(null);

  // Notification state
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error',
  });

  // Show notification message
  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type });
    }, 3000);
  };

  // Fetch all categories from the API
  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch {
      showNotification('Kategoriler yüklenemedi.', 'error');
    }
  };

  // Run fetchCategories when component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for add or update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId !== null) {
        await updateCategory(editingId, formData);
        showNotification('Kategori güncellendi.');
      } else {
        await addCategory(formData);
        showNotification('Kategori eklendi.');
      }
      // Reset form
      setFormData({ name: '', description: '' });
      setEditingId(null);
      fetchCategories();
    } catch {
      showNotification('İşlem başarısız.', 'error');
    }
  };

  // Load selected category into form for editing
  const handleEdit = (category: Category) => {
    setFormData({
      name: category.name,
      description: category.description,
    });
    setEditingId(category.id);
  };

  // Delete selected category by ID
  const handleDelete = async (id: number) => {
    if (!confirm('Bu kategoriyi silmek istediğine emin misin?')) return;
    try {
      await deleteCategory(id);
      showNotification('Kategori silindi.');
      fetchCategories();
    } catch {
      showNotification('Silme işlemi başarısız.', 'error');
    }
  };

  return (
    <div className="categories-container">
      <h2>Kategoriler</h2>

      {/* Notification component */}
      <Notification show={notification.show} message={notification.message} type={notification.type} />

      {/* Form for adding or updating category */}
      <form onSubmit={handleSubmit} className="category-form">
        <input
          type="text"
          name="name"
          placeholder="Kategori Adı"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Açıklama"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId !== null ? 'Güncelle' : 'Ekle'}</button>
      </form>

      {/* List of categories */}
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            <div>
              <strong>{category.name}</strong> – {category.description}
            </div>
            <div className="category-actions">
              <button onClick={() => handleEdit(category)}>Düzenle</button>
              <button onClick={() => handleDelete(category.id)}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
