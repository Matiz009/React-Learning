import React, { useEffect, useState } from "react";
import "../App.css";
const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter > 0) {
      document.title = ` Chats (${counter})`;
    } else {
      document.title = `Chats`;
    }
  }, [counter]);
  const handleClick = () => {
    setCounter(counter + 1);
  };
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
