import React, { useState } from "react";

import InputForm from "./InputForm";
import Items from "./Items";
import Tittle from "./Tittle";
import Choices from "./Choices";

export default function Todo(props) {
  const [todoList, setTodoList] = useState([]);

  function addTodo(input) {
    setTodoList((prevValue) => {
      return [...prevValue, input];
    });
  }

  function changeToDone(id) {
    setTodoList((prevValue) => {
      return prevValue.map((item, index) => {
        const isDone = id === index ? !item.done : item.done;
        return {
          value: item.value,
          done: isDone,
        };
      });
    });
  }

  function deleteNote(id) {
    setTodoList((prevValue) => {
      return prevValue.filter((_, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="todo-app">
      <Tittle isDarkTheme={props.isDarkTheme} setTheme={props.setTheme} />
      <InputForm isDarkTheme={props.isDarkTheme} onAdd={addTodo} />
      {/* main */}
      <div
        className={`todo-app__list  ${props.isDarkTheme ? "dark" : " light"}`}
      >
        <Items
          isDarkTheme={props.isDarkTheme}
          items={todoList}
          onDone={changeToDone}
          onDelete={deleteNote}
        />
        <Choices isDarkTheme={props.isDarkTheme} listLength={todoList.length} />
      </div>
    </div>
  );
}
