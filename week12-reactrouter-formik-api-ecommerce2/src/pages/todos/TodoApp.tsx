import React, { useState } from "react";

// Importing global CSS styles specific to the todo app
import "../../styles/todos/todoApp.css";

// Importing modular components: Header, Main, and Footer
import TodoHeader from "../../components/todos/TodoHeader";
import TodoMain from "../../components/todos/TodoMain";
import TodoFooter from "../../components/todos/TodoFooter";

// Importing Todo type definition
import { Todo } from "../../types/todo";

const TodoApp: React.FC = () => {
  // Declaring a state to keep track of the todo list
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to add a new todo item to the list
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(), // Unique ID based on current timestamp
      title,
      completed: false, // Newly added todos are not completed by default
    };

    // Updating the state with the new todo
    setTodos([...todos, newTodo]);
  };

  return (
    <section className="todoapp">
      {/* Header component responsible for adding new todos */}
      <TodoHeader onAddTodo={addTodo} />

      {/* Main component displaying the list of todos */}
      <TodoMain todos={todos} />

      {/* Footer component - can be used for future stats or filters */}
      <TodoFooter />
    </section>
  );
};

export default TodoApp;
