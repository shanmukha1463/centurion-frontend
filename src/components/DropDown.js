import { useState } from "react";

import "./styles/DropDown.css";

const DropDown = ({ callBackFunc, name, selected }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (props) => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen} className="dropDownButton">
        <div className="buttonText">{name}</div>
        <img
          src="/images/dropDown.png"
          className="dropDownLogo"
          style={open ? { transform: "rotate(180deg)" } : {}}
          alt="not available"
        ></img>
      </button>

      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button
              onClick={() => {
                callBackFunc("Low to High");
              }}
              style={
                selected === "Low to High"
                  ? { backgroundColor: "aqua", color: "black" }
                  : {}
              }
            >
              Low to High
            </button>
          </li>
          <li className="menu-item">
            <button
              onClick={() => {
                callBackFunc("High to Low");
              }}
              style={
                selected === "High to Low"
                  ? { backgroundColor: "aqua", color: "black" }
                  : {}
              }
            >
              High to Low
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
