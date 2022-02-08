import { useState } from "react";
import Cookies from "universal-cookie/es6";

import "./App.css";

function App() {
  const [cookieValue, setCookieValue] = useState("");

  const cookies = new Cookies();

  const handleAdd = () => {
    cookies.set("abc", "Test Cookie", { path: "/" });
  };

  const handleRead = () => {
    setCookieValue(cookies.get("Cookie")); // Pacman
  };

  const handleRemove = () => {
    cookies.remove("abc", { path: "/" });
  };

  return (
    <div className="App">
      <h1>PROGRAMMIZ SESSION COOKIE TEST IN REACT</h1>
      <button onClick={handleAdd}>Add Cookie</button> &nbsp;
      <button onClick={handleRead}>Read Cookie</button> &nbsp;
      <button onClick={handleRemove}>Remove Cookie</button>
      <br />
      <div>Cookie: {cookieValue}</div>
    </div>
  );
}

export default App;
