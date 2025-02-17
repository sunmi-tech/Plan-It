import { useState } from "react";
import arrow from "../assets/images/arrow.svg";
import plus from "../assets/images/plus.svg";
import SubMenu from "./SubMenu";

function AddMenu({menuType}) {
  let [isOpen, setIsOpen] = useState(false);
  let [addSubMenu, setAddSubMenu] = useState([]);
  let [active, setActive] = useState('');
  let [inputValue, setInputValue] = useState('');
  let [saveValue, setSaveValue] = useState('');
  let [showinput, setShowInput] = useState(true);

  const handSave = () => {
    setSaveValue(inputValue);
    setInputValue('');
    setShowInput(false);
  }

    return (
      <li>
        <div className="top_menu">
        <button style={{transform : isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition : 'all 0.3s ease'}} onClick={() => {
          setIsOpen(!isOpen)
        }}><img src={arrow} /></button>
        {
          showinput ? (
            <input className="top_menu_input" type="text"
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
            onKeyDown={(e) => {if(e.key === "Enter") handSave();}}
          />
          ) : (
            <h3>{saveValue}</h3>
          )
        }
        <button onClick={() => {
          setAddSubMenu([...addSubMenu, '']);
          setIsOpen(true)
        }}><img src={plus} /></button>
        </div>
        <ul className="sub_menu" style={{display : isOpen ? 'block' : 'none'}}>
          {
            addSubMenu.map((item, index) => {
              return (
                <SubMenu menuType={menuType} className={active === index ? 'active' : ''} key={index} 
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