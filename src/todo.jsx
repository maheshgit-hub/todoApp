import React, { useState } from "react";
import "./index.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (input) => {
    const { id, content, checked } = input;
    if (!content) return;
    if (task.includes(input)) return;

    setTask((prev) => [...prev, input]);
  };

  const handleDelete = (value) => {
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask != value);
    setTask(updatedTask);
  };
  const handleClear = () => {
    setTask([]);
  };
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList
                key={index}
                data={curTask}
                onHandleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
