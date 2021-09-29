import React, { useState } from "react";
import Cover from "./components/Cover";
import Todo from "./components/Todo";

function App() {
  const [darkTheme, setTheme] = useState(true);

  const changeTheme = function () {
    setTheme(!darkTheme);
  };

  return (
    <div className={`main  ${darkTheme ? "main--dark" : " main--light"}`}>
      <Cover isDarkTheme={darkTheme} />
      <Todo isDarkTheme={darkTheme} setTheme={changeTheme} />
    </div>
  );
}

export default App;
