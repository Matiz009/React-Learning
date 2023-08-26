import { React, useState } from "react";
import "../App.css";
const Challenge_1 = () => {
  const [header, setHeader] = useState("");

  const changeVal = () => {
    header === "I am a header"
      ? setHeader(`My value is changed`)
      : setHeader("I am a header");
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
};

export default Challenge_1;
