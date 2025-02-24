import Header from "../components/Header";
import EmptyTodo from "../components/EmptyTodo";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Todo() {
  const {id} = useParams();
  let [inputValue,setInputValue] = useState('');
  let [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if(id){
      const saveTodos = JSON.parse(localStorage.getItem(`todo/${id}`)) || [];
      setTodoList(saveTodos);
    }
  },[id])
  
  const handSave = () => {
    if(inputValue.trim() === '') return;

    const newTodos = [...todoList, inputValue];
    setTodoList(newTodos)
    setInputValue('');

    if(id){
      localStorage.setItem(`todo/${id}`, JSON.stringify(newTodos))
    }
  }


  return (
    <>
      <div className="todo">
        <Header></Header>
        <div className="todo_add">
          <h3>{id ? `${id} TASK` : "TODAY TASK"}</h3>
          <input
          value={inputValue}
          onChange={(e) => {setInputValue(e.target.value)}}
          onKeyDown={(e) => {
            if(e.key === 'Enter') handSave();
          }}
          type="text" 
          placeholder="오늘의 할일을 입력해주세요!" />
          <button
          onClick={handSave}
          type="submit">입력</button>
        </div>
        <div className="todo_list_wrapper">
          {
            todoList.length === 0 ? <EmptyTodo></EmptyTodo> : <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
          }
        </div>
      </div>
    </>
  );
}

export default Todo;
