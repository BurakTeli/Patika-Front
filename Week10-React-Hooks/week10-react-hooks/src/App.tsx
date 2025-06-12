import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteItem from "./components/NoteItem";
import SearchBar from "./components/SearchBar";
import "./styles/app.css";

interface Note {
  id: number;
  title: string;
  description: string;
  color: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleAddOrUpdateNote = (
    title: string,
    description: string,
    color: string,
    id?: number
  ) => {
    if (id != null) {
      // Güncelleme işlemi
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, title, description, color } : note
        )
      );
      setEditingNote(null);
    } else {
      // Yeni not ekleme
      const newNote: Note = {
        id: Date.now(),
        title,
        description,
        color,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="app-header">📒 Not Uygulamasına Hoş Geldiniz</div>
      <SearchBar onSearch={setSearchQuery} />

      <div className="app-content">
        <div className="left-panel">
          <NoteForm
            onAddOrUpdateNote={handleAddOrUpdateNote}
            editingNote={editingNote}
          />
        </div>

        <div className="right-panel">
          {filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              color={note.color}
              onEdit={() => setEditingNote(note)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
