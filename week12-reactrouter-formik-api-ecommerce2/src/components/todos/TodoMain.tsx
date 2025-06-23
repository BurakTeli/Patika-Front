import React from "react";
import "../../styles/todos/todoMain.css";
import { Todo } from "../../types/todo";

interface Props {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
}

const TodoMain: React.FC<Props> = ({ todos, onToggleTodo }) => {
  return (
    <section className="main">
      {/* Global toggle (not functional yet) */}
      <input className="toggle-all" type="checkbox" id="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="view">
              {/* Toggle individual todo */}
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
              />
              {/* Display todo title */}
              <label>{todo.title}</label>
              {/* Delete button (not functional yet) */}
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoMain;
