import React from "react";
import "../../styles/todos/todoMain.css";

const TodoMain: React.FC = () => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" id="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Sample Task</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TodoMain;
