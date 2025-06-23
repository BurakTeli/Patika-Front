import React from "react";

interface Props {
  currentFilter: "all" | "active" | "completed";
  onChangeFilter: (filter: "all" | "active" | "completed") => void;
  activeCount: number;
  onClearCompleted: () => void;
}

const TodoFooter: React.FC<Props> = ({
  currentFilter,
  onChangeFilter,
  activeCount,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      {/* Display remaining items */}
      <span className="todo-count">
        {activeCount} item{activeCount !== 1 && "s"} left
      </span>

      {/* Filter buttons */}
      <ul className="filters">
        <li>
          <button
            className={currentFilter === "all" ? "selected" : ""}
            onClick={() => onChangeFilter("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={currentFilter === "active" ? "selected" : ""}
            onClick={() => onChangeFilter("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={currentFilter === "completed" ? "selected" : ""}
            onClick={() => onChangeFilter("completed")}
          >
            Completed
          </button>
        </li>
      </ul>

      {/* Clear completed button */}
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
