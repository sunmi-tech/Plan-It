import circle_plus from "../assets/images/circle_plus.svg";
import AddMenu from "./AddMenu";
import { useState } from "react";

function Menu({menuType}) {
  
  let menuText;
  if(menuType === 'todo'){
    menuText = 'TODOS';
  } else if (menuType === 'month'){
    menuText = 'MONTH'
  } else if (menuType === 'note'){
    menuText = 'NOTE'
  }

  let [addMenu, setAddMenu] = useState([]);
  return (
    <div className="Menu">
      <div className="title">
        <h2>{menuText}</h2>
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
              <AddMenu menuType={menuType} key={index}></AddMenu>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Menu;
