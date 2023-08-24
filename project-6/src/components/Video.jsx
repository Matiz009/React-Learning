// Import required modules and components
import React, { useState } from "react";
import "./Video.css"; // Import the CSS file for styling
import PlayButton from "./PlayButton"; // Import the PlayButton component

// Define the Video component that takes props: url, title, verified
const Video = ({ url, title, verified }) => {
  // Initialize the likes state for each video using useState hook
  const [likes, setLikes] = useState(0);

  // Click handler for the like button
  const handleBtn = () => {
    // Increment the likes count by 1 and update the state
    setLikes(likes + 1);
    console.log(likes); // Log the current likes count to the console
  };

  return (
    <div className="video-container">
      {" "}
      {/* Display the video thumbnail */}{" "}
      <img src={url} alt="random" className="video-image" />{" "}
      {/* Display the video's title */}{" "}
      <h3 className={`video-title `}> {title} </h3>{" "}
      {/* Display verification status with a checkmark or "X" mark */}{" "}
      <p className="video-status"> Status: {verified ? "✔️" : "❌"} </p>{" "}
      <div>
        {" "}
        {/* Render a PlayButton with a message and type prop */}{" "}
        <PlayButton message={"Channel is updating"} type="Alert">
          {" "}
          Alert{" "}
        </PlayButton>{" "}
        {/* Render another PlayButton with a different message and type prop */}{" "}
        <PlayButton message={"Hi Youtube"} type="Console">
          {" "}
          Console{" "}
        </PlayButton>{" "}
      </div>{" "}
      <br /> {/* Render the like button with an onClick event */}{" "}
      <button className="like-button" onClick={handleBtn}>
        {" "}
        ❤️{" "}
      </button>{" "}
      {/* Display the number of likes */} <p> Number of Likes: {likes} </p>{" "}
    </div>
  );
};

export default Video;
