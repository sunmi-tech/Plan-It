import todo_add from "../assets/images/todo_add.svg";

function empty_todo() {
  return (
    <div className="empty_todo">
      <img src={todo_add} />
      <p>
        할 일이 비어있어요!
        <br />
        오늘 할 일을 추가해보세요.
      </p>
    </div>
  );
}

export default empty_todo;
