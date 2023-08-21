import React, { useState } from "react";
import "./App.css";
import Chapter2 from "./Chapters/Chapter2";

function App() {
  console.log("App");
  return (
    <div className="App">
      {" "}
      {/* <div className="App-header">
                                {" "}
                                Counter App <Counter />{" "}
                              </div>{" "} */}{" "}
      <Chapter2 />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  console.log("Counter");
  return (
    <div className="Counter">
      <div style={{ color: "white" }}> Count: {count} </div>{" "}
      <button onClick={increment} className="btn">
        {" "}
        +{" "}
      </button>{" "}
      <button onClick={decrement} className="btn">
        {" "}
        -{" "}
      </button>{" "}
    </div>
  );
};

export default App;