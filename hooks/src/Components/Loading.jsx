import React from "react";

const Loading = ({ errorVal }) => {
  console.log(errorVal);
  return (
    <div>
      <center>
        <h1> Loading.......... </h1> <br />
        <p> {errorVal} </p>{" "}
      </center>{" "}
    </div>
  );
};

export default Loading;
