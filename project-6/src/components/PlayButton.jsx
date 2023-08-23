import React from "react";

const PlayButton = ({ message, type }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log(type);
    type === "Alert" && alert(message);
    type === "Console" && console.log(message);
  };
  return <button onClick={handleClick}> {type} </button>;
};

export default PlayButton;
