import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Load tasks from local storage when the component initializes
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("list") || "[]");
    setTasks(savedTasks);
    console.log(savedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(tasks));
  }, [tasks]);

  const changeHandle = (e) => {
    setTaskInput(e.target.value);
  };

  const addHandle = () => {
    if (taskInput.trim() !== "") {
      const newTasks = [...tasks, taskInput];
      setTasks(newTasks);
      setTaskInput("");
    }
  };

  const deleteHandle = () => {
    setTasks([]);
  };

  return (
    <div className="todo-container">
      <h1> Todo List </h1>{" "}
      <div className="input-container">
        <input
          type="text"
          placeholder="Write your task"
          value={taskInput}
          onChange={changeHandle}
        />{" "}
        <button className="button" onClick={addHandle}>
          {" "}
          Add Task{" "}
        </button>{" "}
      </div>{" "}
      {tasks.length === 0 ? (
        <p> No tasks added. </p>
      ) : (
        <div className="tasks-container">
          <h3> Tasks: </h3>{" "}
          <ul>
            {" "}
            {tasks.map((task, index) => (
              <li key={index}>
                {" "}
                {task}{" "}
                <i
                  className="fas fa-trash"
                  onClick={() => {
                    const updatedTasks = tasks.filter((_, i) => i !== index);
                    setTasks(updatedTasks);
                  }}
                ></i>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
          <button className="button" onClick={deleteHandle}>
            {" "}
            Delete All{" "}
          </button>{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default Todo;
