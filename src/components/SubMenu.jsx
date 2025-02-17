import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SubMenu({ className, onClick, menuType }) {
  const navigate = useNavigate();

  let [inputValue, setInputValue] = useState("");
  let [saveValue, setSaveValue] = useState("");
  let [showInput, setShowInput] = useState(true);

  let handSave = () => {
    setSaveValue(inputValue);
    setInputValue('');
    setShowInput(false);
  };

  return (
    <li>
      {showInput ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handSave();
          }}
        />
      ) : (
        <h3 className={className} 
            onClick={(e) => {onClick(e); navigate(`/${menuType}/${saveValue}`)}}>
          {saveValue}
        </h3>
      )}
    </li>
  );
}

export default SubMenu;
