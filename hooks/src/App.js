import { useState } from "react";
import "./App.css";

function App() {
  const [header, setHeader] = useState("I am a header");
  const [counter, setCounter] = useState(1);
  const changeVal = () => {
    setCounter(counter + 1);
    const end = counter <= 1 ? "time" : "times";
    setHeader(`My value is changed ${counter} ${end}`);
    console.log(header);
  };

  return (
    <div className="App">
      <h1 className="h1">{header}</h1>
      <button className="button" onClick={changeVal}>
        Click ME :)
      </button>
    </div>
  );
}

export default App;
