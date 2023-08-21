import React from "react";
import "./Video.css";
const Video = ({ url, title }) => {
  let bg = "dark";
  return (
    <>
      <img src={url} alt="random" />
      <h3 className={bg}> {title} </h3>{" "}
    </>
  );
};

export default Video;
