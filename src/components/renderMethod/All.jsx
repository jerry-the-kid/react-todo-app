import React from "react";
import Item from "../Item";

export default function All(props) {
  return props.attr.items.map((item, index) => (
    <Item
      key={index}
      id={index}
      done={item.done}
      isDarkTheme={props.attr.isDarkTheme}
      value={item.value}
      onDone={props.attr.onDone}
      onDelete={props.attr.onDelete}
    />
  ));
}
