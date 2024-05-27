import React from "react";

const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="Today's dask is..."
      />
      <button type="submit" className="todo-btn"></button>
    </form>
  );
};

export default TodoForm;
