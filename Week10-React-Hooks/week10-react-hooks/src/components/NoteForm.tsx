import React, { useEffect, useState } from "react";
import "../styles/noteform.css";

interface NoteFormProps {
  onAddOrUpdateNote: (title: string, description: string, color: string, id?: number) => void;
  editingNote?: {
    id: number;
    title: string;
    description: string;
    color: string;
  } | null;
}

const colors = ["#e96e9a", "#c178dc", "#f5d56e", "#65ccf3", "#a8d672"];

const NoteForm: React.FC<NoteFormProps> = ({ onAddOrUpdateNote, editingNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
      setSelectedColor(editingNote.color);
    }
  }, [editingNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("⚠️ Başlık zorunlu alandır!");
      return;
    }
    onAddOrUpdateNote(title.trim(), description.trim(), selectedColor, editingNote?.id);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Başlık (zorunlu)"
        className="form-input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        placeholder="Açıklama"
        className="form-textarea"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="color-options">
        {colors.map((color) => (
          <span
            key={color}
            className={`color-circle ${selectedColor === color ? "selected" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      <button type="submit" className="add-button">
        {editingNote ? "Güncelle" : "Ekle"}
      </button>
    </form>
  );
};

export default NoteForm;
