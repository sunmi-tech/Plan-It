import todo_add from "../assets/images/todo_add.svg";
import search from "../assets/images/search.svg";
import calendar from "../assets/images/calendar.svg";
import profile from "../assets/images/profile.svg";

function Todo() {
  return (
    <div className="todo">
      <div className="header">
        <h2>Welcome back, Vincent 👍</h2>
        <div>
          <img src={search} />
          <p>
            <img src={calendar} />
            <span>19 May 2025</span>
          </p>
          <img src={profile} />
        </div>
      </div>
      <div className="todo_add">
        <h3>TODAY TASK</h3>
        <input type="text" placeholder="오늘의 할일을 입력해주세요!" />
        <button type="submit">입력</button>
      </div>
      <div className="todo_list_wrapper">
        <div className="filtered_todos">
          <button>ALL</button>
          <button>DONE</button>
        </div>
        <div className="todo_list">
          <img src={todo_add} />
          <p>
            할 일이 비어있어요!
            <br />
            오늘 할 일을 추가해보세요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
