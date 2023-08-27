import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {" "}
      {/* Using && for conditional rendering */}{" "}
      {isLoggedIn && <p> Welcome, user! </p>}
      {/* Using || for conditional rendering */}{" "}
      {isLoggedIn || <p> Please log in to continue. </p>}
      {/* Ternary operator for more complex conditions */}{" "}
      {isLoggedIn ? <p> Welcome, user! </p> : <p>Please log in to continue.</p>}
      {/* Negating isLoggedIn to reverse the condition */}{" "}
      {!isLoggedIn && <p> Please log in to continue. </p>}{" "}
    </div>
  );
}

export default App;
