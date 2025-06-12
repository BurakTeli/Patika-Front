import React from "react";
import "../styles/noteitem.css";

interface NoteItemProps {
  id: number;
  title: string;
  description: string;
  color: string;
  onEdit: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ title, description, color, onEdit }) => {
  return (
    <div className="note-item" style={{ backgroundColor: color }}>
      <strong>{title}</strong>
      <p>{description}</p>
      <button className="edit-button" onClick={onEdit}>
        Güncelle
      </button>
    </div>
  );
};

export default NoteItem;
