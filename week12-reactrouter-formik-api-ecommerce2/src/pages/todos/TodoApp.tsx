import React, { useState } from "react";
import "../../styles/todos/todoApp.css";
import TodoHeader from "../../components/todos/TodoHeader";
import TodoMain from "../../components/todos/TodoMain";
import TodoFooter from "../../components/todos/TodoFooter";
import { Todo } from "../../types/todo";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // New filter state: "all" | "active" | "completed"
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Add a new todo
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle completed
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Filtered todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <section className="todoapp">
      {/* Header section with input */}
      <TodoHeader onAddTodo={addTodo} />

      {/* Main section shows only filtered todos */}
      <TodoMain
        todos={filteredTodos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />

      {/* Footer section to switch filter */}
      <TodoFooter
        currentFilter={filter}
        onChangeFilter={setFilter}
      />
    </section>
  );
};

export default TodoApp;
