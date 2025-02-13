import circle_plus from "../assets/images/circle_plus.svg";
import AddMenu from "./AddMenu";
import { useState } from "react";

function Menu() {
  let [addMenu, setAddMenu] = useState([]);
  return (
    <div className="Menu">
      <div className="title">
        <h2>TODOS</h2>
        {/*
            addmenu 제목 바꿔야함
        */}
        <button
          onClick={() => {
            setAddMenu([...addMenu, '']);
          }}
        >
          <img src={circle_plus} />
        </button>
      </div>
      <ul>
        {
          addMenu.map((item, index) => {
            return (
              <AddMenu key={index}></AddMenu>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Menu;
