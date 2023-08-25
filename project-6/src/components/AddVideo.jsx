import React, { useState } from "react";
import "./AddVideo.css";

const AddVideo = ({ addVideo }) => {
  const [video, setVideo] = useState({
    title: "",
    url: "",
    verified: "Verified", // Set your default value here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo((prevVideo) => ({
      ...prevVideo,
      [name]: value,
    }));
  };

  const addHandler = (e) => {
    e.preventDefault();
    addVideo(video);
    console.log(video);

    // Reset the input fields to their initial values or empty strings
    setVideo({
      title: "",
      url: "",
      verified: "Verified",
    });
  };

  return (
    <form className="video-form">
      <input
        className="input-field"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={video.title} // Set the value attribute to the state value
      />{" "}
      <input
        className="input-field"
        type="text"
        placeholder="URL"
        onChange={handleChange}
        name="url"
        value={video.url} // Set the value attribute to the state value
      />{" "}
      <span className="verification-label"> Status: </span>{" "}
      <select
        className="verification-select"
        onChange={handleChange}
        name="verified"
        value={video.verified} // Set the value attribute to the state value
      >
        <option> Verified </option> <option> True </option>{" "}
        <option> False </option>{" "}
      </select>{" "}
      <br />
      <button className="add-button" onClick={addHandler}>
        Add Video{" "}
      </button>{" "}
    </form>
  );
};

export default AddVideo;
