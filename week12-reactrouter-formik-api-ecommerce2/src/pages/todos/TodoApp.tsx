import React from "react";
import "../../styles/todos/todoApp.css";
import TodoHeader from "../../components/todos/TodoHeader";
import TodoMain from "../../components/todos/TodoMain";
import TodoFooter from "../../components/todos/TodoFooter";

const TodoApp: React.FC = () => {
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </section>
  );
};

export default TodoApp;
