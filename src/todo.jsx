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
    const ifToDoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifToDoContentMatched) return;

    setTask((prev) => [...prev, { id, content, checked }]);
  };

  const handleDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content != value);
    setTask(updatedTask);
  };
  const handleClear = () => {
    setTask([]);
  };

  const handleChecked = (value) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === value) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
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
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDelete={handleDelete}
                onHandleChecked={handleChecked}
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
