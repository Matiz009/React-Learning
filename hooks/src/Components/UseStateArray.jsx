import React, { useState } from "react";
import "../App.css";

const UseStateArray = () => {
  const array = [
    {
      id: 0,
      name: "Mati ul Rehman",
      age: 23,
    },
    {
      id: 1,
      name: "Ali Raza",
      age: 23,
    },
    {
      id: 2,
      name: "Hamza",
      age: 22,
    },
    {
      id: 3,
      name: "Ahmad",
      age: 32,
    },
  ];

  const [data, setData] = useState(array);
  const resetHandle = () => {
    setData([]);
  };
  const deleteHandle = (id) => {
    const arr = data.filter((data) => data.id !== id);
    setData(arr);
  };
  return (
    <div className="container">
      {data.map((person) => (
        <div className="person" key={person.id}>
          <h1 className="name">{person.name}</h1>
          <p className="age">{person.age} years old</p>
          <button className="btn" onClick={() => deleteHandle(person.id)}>
            Remove
          </button>
        </div>
      ))}

      <button className="btn" onClick={resetHandle}>
        Clear
      </button>
    </div>
  );
};

export default UseStateArray;
