import { useState } from "react";import "./index.css";
export const TodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState({});
  const handleInputChange = (value) => {
    setInput({id:value,content:value,checked:false});
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(input);
    setInput("");
  };
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={input.content}
            onChange={(event) => handleInputChange(event.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
