import React from "react";

export default function Button(props) {
  return (
    <button
      data-btn={props.value}
      className={`todo-app__btn ${
        props.activeBtn === `${props.value}` && "active"
      }  ${props.changeTheme("todo-app__btn")}`}
      onClick={() => props.onChangeBtn(props.value)}
    >
      {props.value}
    </button>
  );
}
