import React, { useState } from "react";
import Button from "./Button";

export default function Choices(props) {
  const [pressedBtn, setPressedBtn] = useState("All");
  const arrayBtnName = ["All", "Active", "Complete"];

  const changeTheme = function (text) {
    return props.isDarkTheme ? `${text}--dark` : `${text}--light`;
  };

  const changePressedBtn = function (value) {
    setPressedBtn(value);
  };

  return (
    <div className={`todo-app__choices  ${changeTheme("todo-app__choices")}`}>
      <p>{props.listLength} items left</p>

      <div className="todo-app__btn-box">
        {arrayBtnName.map((el, index) => (
          <Button
            key={index}
            id={index}
            value={el}
            changeTheme={changeTheme}
            activeBtn={pressedBtn}
            onChangeBtn={changePressedBtn}
          />
        ))}
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
