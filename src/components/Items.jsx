import React from "react";
import Item from "./Item";

export default function Items(props) {
  return (
    <ul className="todo-app__items">
      {props.items.map((item, index) => (
        <Item
          key={index}
          id={index}
          isDarkTheme={props.isDarkTheme}
          value={item.value}
          onDone={props.onDone}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}
