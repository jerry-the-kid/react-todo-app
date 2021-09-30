import React from "react";
import Item from "../Item";

export default function Filter(props) {
  const state = props.type === "Active" ? false : true;

  console.log(props.attr.items, "Hello");
  const itemsFilter = props.attr.items.filter((item) => item.done === state);
  const indexContainer = props.attr.items
    .map((item, index) => {
      if (item.done === state) {
        console.log(index);
        return index;
      }
    })
    .filter(function (element) {
      return element !== undefined;
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
