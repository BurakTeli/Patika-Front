import React, { useState, useEffect } from "react";
import "../../styles/todos/todoApp.css";
import TodoHeader from "../../components/todos/TodoHeader";
import TodoMain from "../../components/todos/TodoMain";
import TodoFooter from "../../components/todos/TodoFooter";
import { Todo } from "../../types/todo";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Load todos from localStorage on first render
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle completed state
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Update a todo title
  const updateTodo = (id: number, newTitle: string) => {
    if (newTitle === "") return;
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo))
    );
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  // Filtered todos based on current filter
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
        onUpdateTodo={updateTodo}
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
