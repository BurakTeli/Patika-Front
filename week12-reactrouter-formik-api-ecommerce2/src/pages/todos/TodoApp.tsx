import React, { useState } from "react";
import "../../styles/todos/todoApp.css";
import TodoHeader from "../../components/todos/TodoHeader";
import TodoMain from "../../components/todos/TodoMain";
import TodoFooter from "../../components/todos/TodoFooter";
import { Todo } from "../../types/todo";

const TodoApp: React.FC = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to add a new todo
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <section className="todoapp">
      {/* Header section with input */}
      <TodoHeader onAddTodo={addTodo} />

      {/* Main section showing list of todos */}
      <TodoMain todos={todos} onToggleTodo={toggleTodo} />

      {/* Footer section with filter and clear */}
      <TodoFooter />
    </section>
  );
};

export default TodoApp;
