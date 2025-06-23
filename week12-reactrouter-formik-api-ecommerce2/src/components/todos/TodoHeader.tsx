import React, { useState } from "react";
import "../../styles/todos/todoHeader.css";

interface Props {
  onAddTodo: (title: string) => void;
}

const TodoHeader: React.FC<Props> = ({ onAddTodo }) => {
  // Local state to store input value
  const [title, setTitle] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Don't add empty todos
    if (title.trim() === "") return;

    // Call the parent function to add the todo
    onAddTodo(title.trim());

    // Clear the input field
    setTitle("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for new todo */}
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </header>
  );
};

export default TodoHeader;
