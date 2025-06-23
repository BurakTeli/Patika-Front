import React, { useState } from "react";

// Importing CSS styles specific to the todo header component
import "../../styles/todos/todoHeader.css";

// Defining the props interface for TodoHeader
interface Props {
  onAddTodo: (title: string) => void; // Function passed from parent to add a new todo
}

// Functional component with props destructured
const TodoHeader: React.FC<Props> = ({ onAddTodo }) => {
  // Local state to hold the current value of the input field
  const [title, setTitle] = useState("");

  // Handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload on submit

    if (title.trim() === "") return; // Avoid adding empty todos

    onAddTodo(title.trim()); // Call parent function to add todo
    setTitle(""); // Clear input field after submission
  };

  return (
    <header className="header">
      {/* Main title of the todo app */}
      <h1>todos</h1>

      {/* Form to add new todo items */}
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo" // CSS class for styling
          placeholder="What needs to be done?" // Placeholder text
          autoFocus // Automatically focuses this field on page load
          value={title} // Controlled input bound to `title` state
          onChange={(e) => setTitle(e.target.value)} // Updates state on user input
        />
      </form>
    </header>
  );
};

export default TodoHeader;
