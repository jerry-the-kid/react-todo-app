import React, { useState } from "react";
import closeIcon from "../images/icon-cross.svg";

export default function Item(props) {
  const [isDone, setIsDone] = useState(false);

  const handleClick = function () {
    setIsDone(!isDone);
  };

  const roundBoxTheme = function () {
    return props.isDarkTheme
      ? "todo-app__round-box--dark"
      : "todo-app__round-box--light";
  };

  return (
    <li
      className={`todo-app__item  ${
        props.isDarkTheme ? "todo-app__item--dark" : " todo-app__item--light"
      }`}
    >
      <div className="todo-app__note" onClick={handleClick}>
        <span
          role="checkbox"
          aria-checked={isDone}
          tabIndex="0"
          aria-labelledby="chk1-label"
          className={`todo-app__round-box ${roundBoxTheme()}   ${
            isDone && "todo-app__round-box--color "
          }`}
        ></span>
        <label htmlFor="chk1-label" className={`${isDone && "done"}`}>
          the word word on
        </label>
      </div>
      <div className="todo-app__icon-close-box">
        <img className="todo-app__icon-close" src={closeIcon}></img>
      </div>
    </li>
  );
}
