import React, { useRef, useState } from "react";
import "./UseRef.css"; // Import your CSS file for styling

const UseRef = () => {
  const luckyName = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    luckyName.current.value === "" ? alert("Enter something!") : setShow(true);
  };
  const [show, setShow] = useState(false);
  return (
    <div className="useRef-container">
      {" "}
      {/* Apply a CSS class for the container */}
      <form action="" onSubmit={submitHandler}>
        <div className="form-group">
          {" "}
          {/* Apply a CSS class for the form group */}
          <label htmlFor="luckyName">Enter your Lucky Name</label>{" "}
          <input type="text" id="luckyName" ref={luckyName} />
        </div>{" "}
        <br />
        <button className="submit-button">Submit</button>{" "}
        {/* Apply a CSS class for the button */}
      </form>{" "}
      <br />
      <h3>{show ? `Your lucky name is ${luckyName.current.value}` : ""}</h3>
    </div>
  );
};

export default UseRef;
