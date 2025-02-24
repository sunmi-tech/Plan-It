import { useState } from "react";
import unCheck from "../assets/images/unCheck.svg";
import check from "../assets/images/checked.svg";
import trash from "../assets/images/trash.svg";
import { useParams } from "react-router-dom";

function TodoList({ todoList, setTodoList }) {
  const {id} = useParams();
  const [checkedItems, setCheckedItems] = useState(
    new Array(todoList.length).fill(false) // 각 아이템의 체크 상태를 저장하는 배열
  );

  const [isDeleted, setIsDeleted] = useState(false);

  const toggleChecked = (index) => {
    setCheckedItems((prev) => {
      const newCheckedItems = [...prev];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  // 삭제 기능
  const deleteTodo = (index) => {
    const updatedTodos = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodos);
    if (id) {
      localStorage.setItem(`todo/${id}`, JSON.stringify(updatedTodos));
    }
  };

  return (
    <div className="todo_list">
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <label htmlFor={`checkbox_${index}`} onClick={() => toggleChecked(index)}>
              <input id={`checkbody_${index}`} type="checkbox" checked={checkedItems[index]} readOnly />
              <img
                src={checkedItems[index] ? check : unCheck}
                alt="체크박스 아이콘"
              />
              <span className={checkedItems[index] ? "checked" : ""}>{todo}</span>
            </label>
            <button onClick={() => {deleteTodo(index)}}><img src={trash} /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
