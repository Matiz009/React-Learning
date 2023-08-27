import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UseStateArray from "./Components/UseStateArray";
import SpreadOperator from "./Components/SpreadOperator";
import ShortCircuitEvaluation from "./Components/ShortCircuitEvaluation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    {
      //<UseStateArray / >
    }{" "}
    <ShortCircuitEvaluation />
  </React.StrictMode>
);