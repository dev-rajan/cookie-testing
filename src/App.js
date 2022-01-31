import "./App.css";
import Cookies from "universal-cookie/es6";

function App() {
  const cookies = new Cookies();

  const handleAdd = () => {
    cookies.set("abc", "Test Cookie", { path: "/" });
  };

  const handleRemove = () => {
    cookies.remove("abc", { path: "/" });
  };

  console.log(cookies.get("Cookie")); // Pacman

  return (
    <div className="App">
      <h1>PROGRAMMIZ SESSION COOKIE TEST IN REACT</h1>
      <button onClick={handleAdd}>Add Cookie</button> &nbsp;
      <button onClick={handleRemove}>Remove Cookie</button>
    </div>
  );
}

export default App;
