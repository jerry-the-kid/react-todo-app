import React from "react";
import All from "./renderMethod/All";
import Filter from "./renderMethod/Filter";

export default function Items(props) {
  return (
    <ul className="todo-app__items">
      {props.choice === "All" ? (
        <All attr={props} />
      ) : (
        <Filter attr={props} type={props.choice} />
      )}
    </ul>
  );
}
