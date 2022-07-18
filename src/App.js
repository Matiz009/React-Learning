import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault(); //this prevents the refresh
    setTodos([...todos, input]);
    setInput("");
    e.append(<h3>List of elements </h3>);
  };
  return (
    <div className="app">
      <h1 className="main">Welcome to my TODO List</h1>
      <hr></hr>
      <form className="form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addTodo}>
          Add To Do
        </button>
      </form>

      <h2 className="d1">List of Todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
