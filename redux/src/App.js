import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
const App = () => {
  const myState = useSelector((state) => state.changeState);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1> Counter App </h1> <h4> Using React and Redux </h4>{" "}
        <div className="quantity">
          <button className="decrement" onClick={() => dispatch(decrement())}>
            {" "}
            -{" "}
          </button>{" "}
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />{" "}
          <button className="increment" onClick={() => dispatch(increment())}>
            {" "}
            +{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default App;
