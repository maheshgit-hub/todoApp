import React, { useEffect, useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";
import "./index.css";
const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleInputChange = (value) => {
    setInput(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!input) return;
    if (task.includes(input)) {
      setInput("");
      return;
    }
    setTask((prev) => [...prev, input]);
    setInput("");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={input}
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
      <section className="displayTask">
        <ul>
          {task.map((data, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{data}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn">
                  <MdDelete />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Todo;
