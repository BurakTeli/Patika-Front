import React from "react";
import { Todo } from "../../types/todo";

interface Props {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoMain: React.FC<Props> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              {/* Toggle checkbox */}
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
              />
              {/* Todo title */}
              <label>{todo.title}</label>

              {/* Delete button */}
              <button
                className="destroy"
                onClick={() => onDeleteTodo(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoMain;
