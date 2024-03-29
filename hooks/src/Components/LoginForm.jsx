import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const formContainerStyle = {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    maxWidth: "300px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userList, setUserList] = useState([]);

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const btnHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      setUserList([...userList, { email, password }]);
      setLoggedIn(true);
      setEmail("");
      setPassword("");
      toast.success("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else
      toast("Fill all fields", {
        position: "top-center",
      });
  };
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div style={formContainerStyle}>
      <form>
        <h2 style={{ marginBottom: "15px" }}> Login </h2>{" "}
        <label style={labelStyle}> Email </label>{" "}
        <input
          style={inputStyle}
          type="email"
          name="email"
          onChange={changeEmailHandler}
          value={email}
        />{" "}
        <label style={labelStyle}> Password </label>{" "}
        <input
          style={inputStyle}
          type="password"
          name="password"
          onChange={changePasswordHandler}
          value={password}
        />{" "}
        <button style={buttonStyle} onClick={btnHandler}>
          Login{" "}
        </button>{" "}
        <p> {location.pathname} </p>{" "}
      </form>{" "}
      {isLoggedIn && (
        <>
          {" "}
          {userList.map((user, index) => (
            <div key={index}>
              <p> Email: {user.email} </p> <p> Password: {user.password} </p>{" "}
            </div>
          ))}{" "}
        </>
      )}{" "}
      <ToastContainer />
    </div>
  );
};

export default LoginForm;