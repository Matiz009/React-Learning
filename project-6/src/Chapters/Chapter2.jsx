import React, { useState } from "react";
import Video from "../components/Video";
import data from "../data/data";
import AddVideo from "../components/AddVideo";

const Chapter2 = () => {
  const [videos, setVideos] = useState(data);

  const addVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  return (
    <>
      <AddVideo addVideo={addVideo} />{" "}
      {videos.map((item, index) => (
        <div key={index}>
          <Video title={item.title} url={item.url} verified={item.verified} />{" "}
          <br />
        </div>
      ))}{" "}
    </>
  );
};

export default Chapter2;