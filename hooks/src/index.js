import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UseStateArray from "./Components/UseStateArray";
import SpreadOperator from "./Components/SpreadOperator";
import ShortCircuitEvaluation from "./Components/ShortCircuitEvaluation";
import LoginForm from "./Components/LoginForm";
import UseEffect from "./Components/UseEffect";
import CleanUp from "./Components/CleanUp";
import FetchApi from "./Components/FetchApi";
import UseRef from "./Components/UseRef";
import UseReducer from "./Components/UseReducer";
import CompA from "./Components/UseContext/CompA";
const BioData = createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    {
      //<UseStateArray / >
    }{" "}
    {
      //<ShortCircuitEvaluation />
    }{" "}
    {
      //<LoginForm />
    }{" "}
    {
      //<UseEffect / >
    }{" "}
    {
      //<CleanUp />
    }{" "}
    {
      //<FetchApi />
    }{" "}
    {
      //<UseRef />
    }{" "}
    {
      // <UseReducer />
    }{" "}
    <BioData.Provider value={"Mati ul Rehman"}>
      <CompA />
    </BioData.Provider>{" "}
  </React.StrictMode>
);
export { BioData };
