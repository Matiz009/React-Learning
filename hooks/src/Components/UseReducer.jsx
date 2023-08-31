import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INC") {
    return state + 1;
  } else {
    if (state === 0) {
      return 0;
    }
    return state - 1;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <center>
      <h1> {state} </h1>{" "}
      <button onClick={() => dispatch({ type: "INC" })}> + </button>{" "}
      <button onClick={() => dispatch({ type: "DEC" })}> - </button>{" "}
    </center>
  );
};

export default UseReducer;
