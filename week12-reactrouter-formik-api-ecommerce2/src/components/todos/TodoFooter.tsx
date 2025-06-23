import React from "react";
// Importing the CSS file for the footer section of the todo app
import "../../styles/todos/todoFooter.css";

// Functional component definition for the footer of the todo app
const TodoFooter: React.FC = () => {
  return (
    <footer className="footer">
      {/* Displays the count of remaining (active) todo items */}
      <span className="todo-count">
        <strong>1</strong> item left
      </span>

      {/* Filter links to view all, active, or completed todos */}
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      {/* Button to clear completed todos - no functionality yet */}
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default TodoFooter;
