import React, { useState } from "react";
import Video from "../components/Video";
import data from "../data/data";

const Chapter2 = () => {
  const [videos, setVideos] = useState(data);

  const addHandler = () => {
    const count = videos.length + 1;
    const newVideo = {
      title: `Channel ${count}`,
      url: "https://picsum.photos/200/300?whitescale",
      verified: true,
    };

    setVideos([...videos, newVideo]);
  };

  const delHandler = (index) => {
    const updatedVideos = [...videos];
    updatedVideos.splice(index, 1);
    setVideos(updatedVideos);
  };

  return (
    <div>
      <button onClick={addHandler}> Add Video </button>{" "}
      <button onClick={() => delHandler(videos.length - 1)}>
        {" "}
        Delete Last Video{" "}
      </button>{" "}
      {videos.map((item, index) => (
        <div key={index}>
          <Video title={item.title} url={item.url} verified={item.verified} />{" "}
          <br />
        </div>
      ))}{" "}
    </div>
  );
};

export default Chapter2;
