import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  //let counter = 10;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("Value added", counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("Value Removed", counter);
  };

  return (
    <>
      <h1>Counter App: {counter}</h1>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <footer>Counter Count: {counter}</footer>
    </>
  );
}

export default App;
