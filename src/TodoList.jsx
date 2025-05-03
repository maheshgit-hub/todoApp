import { MdCheck, MdDelete } from "react-icons/md";import "./index.css";
export const TodoList = ({ key, data, onHandleDelete }) => {
  return (
    <>
      <li key={key} className="todo-item">
        <span>{data}</span>
        <button className="check-btn">
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => onHandleDelete(data)}>
          <MdDelete />
        </button>
      </li>
    </>
  );
};
