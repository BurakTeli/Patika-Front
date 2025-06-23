import React from "react";
// Importing CSS styles specific to the main section of the todo app
import "../../styles/todos/todoMain.css";

// Importing the Todo type definition
import { Todo } from "../../types/todo";

// Defining the props interface to accept an array of todos
interface Props {
  todos: Todo[];
}

// Functional component that renders the main todo list section
const TodoMain: React.FC<Props> = ({ todos }) => {
  return (
    <section className="main">
      {/* Master checkbox to toggle all todos as completed - functionality not implemented yet */}
      <input className="toggle-all" type="checkbox" id="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      {/* Rendering the list of todo items */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="view">
              {/* Checkbox for individual todo - checked status and event handler to be added */}
              <input className="toggle" type="checkbox" />

              {/* Displaying the title of the todo item */}
              <label>{todo.title}</label>

              {/* Button to delete the todo item - not yet functional */}
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoMain;
