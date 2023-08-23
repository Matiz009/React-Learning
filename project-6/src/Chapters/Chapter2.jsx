import React from "react";
import Video from "../components/Video";
import data from "../data/data";

const Chapter2 = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Video title={item.title} url={item.url} verified={item.verified} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Chapter2;
