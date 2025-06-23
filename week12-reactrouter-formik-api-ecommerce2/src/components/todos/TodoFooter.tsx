import React from "react";
import "../../styles/todos/todoFooter.css";

const TodoFooter: React.FC = () => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> item left
      </span>

      <ul className="filters">
        <li><a href="#/" className="selected">All</a></li>
        <li><a href="#/">Active</a></li>
        <li><a href="#/">Completed</a></li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default TodoFooter;
