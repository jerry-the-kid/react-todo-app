import React from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";

export default function Tittle(props) {
  const handlerKeyPress = function (e) {
    console.log(e.key);
    if (e.key === "Enter" || e.key === " ") {
      props.setTheme();
    }
  };

  return (
    <div className="todo-app__title">
      <h1 className="todo-app__heading">todo</h1>
      <img
        tabIndex="1"
        className="todo-app__toggle"
        src={props.isDarkTheme ? sunIcon : moonIcon}
        alt="theme-icon"
        onKeyDown={handlerKeyPress}
        onClick={() => props.setTheme()}
      />
    </div>
  );
}
