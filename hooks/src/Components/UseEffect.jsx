import React, { useEffect, useState } from "react";
import "../App.css";
import UseCustomHook from "./useCustomHook";
const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  UseCustomHook(counter);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    alert("UseEffect 2");
  }, []);
  return (
    <div>
      <center>
        {" "}
        <h1
          style={{
            color: "white",
          }}
        >
          {" "}
          {counter}{" "}
        </h1>{" "}
      </center>{" "}
      <center>
        <button className="btn" onClick={handleClick}>
          {" "}
          Click ME{" "}
        </button>{" "}
      </center>{" "}
    </div>
  );
};

export default UseEffect;