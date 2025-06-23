import React, { useState } from "react";
import { Todo } from "../../types/todo";

interface Props {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onUpdateTodo: (id: number, newTitle: string) => void;
}

const TodoMain: React.FC<Props> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  onUpdateTodo,
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleEditStart = (id: number, currentText: string) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleEditKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.key === "Enter") {
      onUpdateTodo(id, editText.trim());
      setEditingId(null);
    } else if (e.key === "Escape") {
      setEditingId(null);
      setEditText("");
    }
  };

  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo) => {
          const isEditing = editingId === todo.id;

          return (
            <li
              key={todo.id}
              className={`${todo.completed ? "completed" : ""} ${
                isEditing ? "editing" : ""
              }`}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleTodo(todo.id)}
                />
                <label
                  onDoubleClick={() => handleEditStart(todo.id, todo.title)}
                >
                  {todo.title}
                </label>
                <button
                  className="destroy"
                  onClick={() => onDeleteTodo(todo.id)}
                />
              </div>

              {isEditing && (
                <input
                  className="edit"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => handleEditKeyDown(e, todo.id)}
                  autoFocus
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoMain;
