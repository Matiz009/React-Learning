import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const actualWidthSet = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [screenHeight, setScreenHeight] = useState(window.screen.height);
  useEffect(() => {
    window.addEventListener("resize", actualWidthSet);
    return () => {
      window.removeEventListener("resize", actualWidthSet);
    };
  });
  return (
    <div>
      <center>
        {" "}
        <h1> The width of screen is: {screenWidth} </h1>{" "}
      </center>{" "}
      <center>
        {" "}
        <h1> The height of screen is: {screenHeight} </h1>{" "}
      </center>{" "}
    </div>
  );
};

export default CleanUp;
