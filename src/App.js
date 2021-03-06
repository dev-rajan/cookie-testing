import { useState } from "react";
import Cookies from "universal-cookie/es6";

import "./App.css";

function App() {
  const [crossCookie, setCrossCookie] = useState("");
  const [normalCookie, setNormalCookie] = useState("");

  const cookies = new Cookies();

  const handleAdd = () => {
    cookies.set("abc", "Cross Domain Cookie", {
      path: "/",
      domain: process.env.REACT_APP_DOMAIN,
    });
  };

  const handleRead = () => {
    setCrossCookie(
      cookies.get("abc", {
        path: "/",
      })
    );
  };

  const handleRemove = () => {
    cookies.remove("abc", {
      path: "/",
      domain: process.env.REACT_APP_DOMAIN,
    });
  };

  const handleNormalAdd = () => {
    cookies.set("abcNormal", "Normal Local Cookie", {
      path: "/",
    });
  };

  const handleNormalRead = () => {
    setNormalCookie(
      cookies.get("abcNormal", {
        path: "/",
      })
    );
  };

  const handleNormalRemove = () => {
    cookies.remove("abcNormal", {
      path: "/",
    });
  };

  return (
    <div className="App">
      <h1>{process.env.REACT_APP_DOMAIN} CROSS SESSION COOKIE TEST IN REACT</h1>
      <button onClick={handleAdd}>Add Cookie</button> &nbsp;
      <button onClick={handleRead}>Read Cookie</button> &nbsp;
      <button onClick={handleRemove}>Remove Cookie</button>
      <br />
      <div>Cookie: {crossCookie}</div>
      <h1>{process.env.REACT_APP_DOMAIN} LOCAL SESSION COOKIE TEST IN REACT</h1>
      <button onClick={handleNormalAdd}>Add Cookie</button> &nbsp;
      <button onClick={handleNormalRead}>Read Cookie</button> &nbsp;
      <button onClick={handleNormalRemove}>Remove Cookie</button>
      <br />
      <div>Cookie: {normalCookie}</div>
    </div>
  );
}

export default App;
