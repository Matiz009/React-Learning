import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
};

export default App;
