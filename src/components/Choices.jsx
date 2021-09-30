import React, { useState } from "react";
import Button from "./Button";

export default function Choices(props) {
  const [pressedBtn, setPressedBtn] = useState("All");
  const arrayBtnName = ["All", "Active", "Complete"];

  const changeTheme = function (text) {
    return props.isDarkTheme ? `${text}--dark` : `${text}--light`;
  };

  const countList = function () {
    const countDone = props.list.reduce((acc, el) => {
      if (el.done === false) return acc + 1;
      else return acc + 0;
    }, 0);

    return countDone;
  };

  const changePressedBtn = function (value) {
    setPressedBtn(value);
    props.onRender(value);
  };

  return (
    <div className={`todo-app__choices  ${changeTheme("todo-app__choices")}`}>
      <p>{countList()} items left</p>

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
        onClick={() => props.onDelete()}
        className={`todo-app__btn todo-app__btn--opacity ${changeTheme(
          "todo-app__btn"
        )}`}
      >
        Clear Completed
      </button>
    </div>
  );
}
