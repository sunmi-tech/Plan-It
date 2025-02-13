import { useState } from "react";
import arrow from "../assets/images/arrow.svg";
import plus from "../assets/images/plus.svg";
import SubMenu from "./SubMenu";

function AddMenu() {
  let [isOpen, setIsOpen] = useState(false);
  let [addSubMenu, setAddSubMenu] = useState([]);
  let [active, setActive] = useState('');
    return (
      <li>
        <div className="top_menu">
        <button onClick={() => {
          setIsOpen(!isOpen)
        }}><img src={arrow} /></button>
        <h3>New Menu</h3>
        <button onClick={() => {
          setAddSubMenu([...addSubMenu, ''])
        }}><img src={plus} /></button>
        </div>
        <ul className="sub_menu" style={{display : isOpen ? 'block' : 'none'}}>
          {
            addSubMenu.map((item, index) => {
              return (
                <SubMenu className={active === index ? 'active' : ''} key={index} 
                onClick={() => {
                  setActive(index)
                }}></SubMenu>
              )
            })
          }
        </ul>
      </li>
    );
  }



  export default AddMenu