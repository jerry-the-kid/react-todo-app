import React from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";

export default function Tittle(props) {
  const handlerKeyPress = function (e) {
    if (e.key === "Enter" || e.key === " ") {
      props.setTheme();
    }
  };

  return (
    <div className="todo-app__title">
      <h1 className="todo-app__heading">todo</h1>

      <img
        tabIndex="0"
        role="checkbox"
        className="todo-app__toggle"
        src={props.isDarkTheme ? sunIcon : moonIcon}
        aria-checked={props.isDarkTheme}
        alt={`${props.isDarkTheme ? "Light mode switch" : "Dark mode switch"}`}
        onKeyDown={handlerKeyPress}
        onClick={() => props.setTheme()}
        aria-label="Theme Switch"
      />
    </div>
  );
}
