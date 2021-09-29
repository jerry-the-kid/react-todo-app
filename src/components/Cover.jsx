import React from "react";

export default function Cover(props) {
  return (
    <div
      className={`cover  ${
        props.isDarkTheme ? "cover--dark" : " cover--light"
      }`}
    ></div>
  );
}
