import React from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import Items from "./Items";
import Choices from "./Choices";

export default function Todo(props) {
  const handlerKeyPress = function (e) {
    console.log(e.key);
    if (e.key === "Enter" || e.key === " ") {
      props.setTheme();
    }
  };

  return (
    <div className="todo-app">
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

      <form
        className={`todo-app__form  ${props.isDarkTheme ? "dark" : " light"}`}
      >
        <span
          className={`todo-app__round-box ${
            props.isDarkTheme
              ? "todo-app__round-box--dark"
              : " todo-app__round-box--light"
          }`}
        ></span>
        <input
          type="text"
          className="todo-app__input"
          aria-label="input-field"
          placeholder="Create a new todo..."
        ></input>
      </form>

      {/* main */}
      <div
        className={`todo-app__list  ${props.isDarkTheme ? "dark" : " light"}`}
      >
        <Items isDarkTheme={props.isDarkTheme} />
        <Choices isDarkTheme={props.isDarkTheme} />
      </div>
    </div>
  );
}
