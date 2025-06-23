import React, { useState } from "react";
import "../../styles/todos/todoApp.css";
import TodoHeader from "../../components/todos/TodoHeader";
import TodoMain from "../../components/todos/TodoMain";
import TodoFooter from "../../components/todos/TodoFooter";
import { Todo } from "../../types/todo";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add a new todo
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle the completion status of a todo
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

  return (
    <section className="todoapp">
      {/* Header section with input */}
      <TodoHeader onAddTodo={addTodo} />

      {/* Main section showing list of todos */}
      <TodoMain
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />

      {/* Footer section with filter and clear */}
      <TodoFooter />
    </section>
  );
};

export default TodoApp;
