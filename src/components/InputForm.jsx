import React, { useState } from "react";

export default function InputForm(props) {
  const [value, setValue] = useState("");

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const input = {
      value: value,
      done: false,
    };

    props.onAdd(input);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`todo-app__form  ${props.isDarkTheme ? "dark" : " light"}`}
    >
      <span
        className={`todo-app__round-box ${
          props.isDarkTheme
            ? "todo-app__round-box--dark"
            : " todo-app__round-box--light"
        }`}
      ></span>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        className="todo-app__input"
        aria-label="input-field"
        placeholder="Create a new todo..."
      ></input>
    </form>
  );
}
