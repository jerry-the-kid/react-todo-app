import React, { useState } from "react";
import Cover from "./components/Cover";
import Todo from "./components/Todo";

function App() {
  // localStorage.clear();
  let theme = localStorage.getItem("darkTheme") === "true";
  const [darkTheme, setTheme] = useState(theme);

  const changeTheme = function () {
    setTheme(!darkTheme);
    localStorage.setItem("darkTheme", !darkTheme);
  };

  return (
    <div className={`main  ${darkTheme ? "main--dark" : " main--light"}`}>
      <Cover isDarkTheme={darkTheme} />
      <Todo isDarkTheme={darkTheme} setTheme={changeTheme} />
    </div>
  );
}

export default App;
