import React, { useState } from "react";
import "./Video.css";
import PlayButton from "./PlayButton";

const Video = ({ url, title, verified }) => {
  const [likes, setLikes] = useState(0); // Initialize likes state for each video

  return (
    <div className="video-container">
      <img src={url} alt="random" className="video-image" />
      <h3 className={`video-title `}> {title} </h3>{" "}
      <p className="video-status"> Status: {verified ? "✔️" : "❌"} </p>{" "}
      <div>
        {" "}
        <PlayButton message={"Channel is updating"} type="Alert">
          {" "}
          Alert{" "}
        </PlayButton>{" "}
        <PlayButton message={"Hi Youtube"} type="Console">
          {" "}
          Console{" "}
        </PlayButton>{" "}
      </div>{" "}
      <br />
      <button className="like-button" onClick={() => setLikes(likes + 1)}>
        {" "}
        ❤️{" "}
      </button>{" "}
      <p> Number of Likes: {likes} </p>{" "}
    </div>
  );
};

export default Video;
