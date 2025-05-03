import { MdCheck, MdDelete } from "react-icons/md";
import "./index.css";
export const TodoList = ({
  data,
  checked,
  onHandleDelete,
  onHandleChecked,
}) => {
  return (
    <>
      <li className="todo-item">
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={() => onHandleChecked(data)}>
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => onHandleDelete(data)}>
          <MdDelete />
        </button>
      </li>
    </>
  );
};
