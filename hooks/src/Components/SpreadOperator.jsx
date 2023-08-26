import React, { useState } from "react";
import "../App.css";

const SpreadOperator = () => {
  const [data, setData] = useState({
    id: 0,
    name: "Mati ul Rehman",
    age: 23,
  });

  const updateHandle = () => {
    // Spread the existing data object and update the name
    setData({ ...data, name: "Ali", age: 21 });
  };

  return (
    <div className="container">
      <div className="person" key={data.id}>
        <h1 className="name">{data.name}</h1>
        <p className="age">{data.age} years old</p>
      </div>
      <button className="btn" onClick={updateHandle}>
        Update
      </button>
    </div>
  );
};

export default SpreadOperator;
