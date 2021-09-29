import React from "react";
import Item from "./Item";

export default function Items(props) {
  return (
    <ul className="todo-app__items">
      <Item isDarkTheme={props.isDarkTheme} />
      <Item isDarkTheme={props.isDarkTheme} />
      <Item isDarkTheme={props.isDarkTheme} />
    </ul>
  );
}
