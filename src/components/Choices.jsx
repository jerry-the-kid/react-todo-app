import React from "react";

export default function Choices(props) {
  const changeTheme = function (text) {
    return props.isDarkTheme ? `${text}--dark` : `${text}--light`;
  };

  return (
    <div className={`todo-app__choices ${changeTheme("todo-app__choices")}`}>
      <p>5 items left</p>

      <div className="todo-app__btn-box">
        <button className={`todo-app__btn ${changeTheme("todo-app__btn")}`}>
          All
        </button>
        <button className={`todo-app__btn ${changeTheme("todo-app__btn")}`}>
          Active
        </button>
        <button className={`todo-app__btn ${changeTheme("todo-app__btn")}`}>
          Completed
        </button>
      </div>
      <button
        className={`todo-app__btn todo-app__btn--opacity ${changeTheme(
          "todo-app__btn"
        )}`}
      >
        Clear Completed
      </button>
    </div>
  );
}
