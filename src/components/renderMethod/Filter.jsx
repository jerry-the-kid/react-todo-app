import React from "react";
import Item from "../Item";

export default function Filter(props) {
  const state = props.type === "Active" ? false : true;

  const itemsFilter = props.attr.items.filter((item) => item.done === state);

  const indexContainer = [];

  props.attr.items.forEach(function (el, i) {
    if (el.done === state) indexContainer.push(i);
  });

  return itemsFilter.map((item, index) => {
    return (
      <Item
        key={index}
        id={indexContainer[index]}
        done={item.done}
        isDarkTheme={props.attr.isDarkTheme}
        value={item.value}
        onDone={props.attr.onDone}
        onDelete={props.attr.onDelete}
      />
    );
  });
}
