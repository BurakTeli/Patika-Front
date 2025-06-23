import React, { useState } from "react";
import "../../styles/todos/todoApp.css";
import TodoHeader from "../../components/todos/TodoHeader";
import TodoMain from "../../components/todos/TodoMain";
import TodoFooter from "../../components/todos/TodoFooter";
import { Todo } from "../../types/todo";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
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

  // Toggle todo completed state
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo by id
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Remove all completed todos
  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // Calculate filtered todos based on filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <section className="todoapp">
      <TodoHeader onAddTodo={addTodo} />

      <TodoMain
        todos={filteredTodos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />

      <TodoFooter
        currentFilter={filter}
        onChangeFilter={setFilter}
        activeCount={activeCount}
        onClearCompleted={clearCompleted}
      />
    </section>
  );
};

export default TodoApp;
