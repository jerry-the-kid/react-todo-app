// import React, { useState } from "react";
import closeIcon from "../images/icon-cross.svg";

export default function Item(props) {
  const handleClick = function () {
    props.onDone(props.id);
  };

  const handleCloseClick = function () {
    props.onDelete(props.id);
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
          aria-checked={props.done}
          tabIndex="0"
          aria-labelledby={`chk${props.index}-label`}
          className={`todo-app__round-box ${roundBoxTheme()}   ${
            props.done && "todo-app__round-box--color "
          }`}
        ></span>
        <label
          htmlFor={`chk${props.index}-label`}
          className={`${props.done && "done"}`}
        >
          {props.value}
        </label>
      </div>
      <div className="todo-app__icon-close-box">
        <img
          tabIndex="1"
          onClick={handleCloseClick}
          className="todo-app__icon-close"
          src={closeIcon}
          alt="Delete To Do"
        ></img>
      </div>
    </li>
  );
}
