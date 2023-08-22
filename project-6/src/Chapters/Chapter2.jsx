import React from "react";
import Video from "../components/Video";
const Chapter2 = () => {
  return (
    <>
      {" "}
      <Video url="https://picsum.photos/200/300?grayscale" title="First" />{" "}
      <Video url="https://picsum.photos/seed/picsum/200/300" title="Second" />
    </>
  );
};

export default Chapter2;
