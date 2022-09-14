import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogIn.css";

const LogIn = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    navigate("/todo");
  };
  const userName = localStorage.getItem("name");

  return (
    <div className="loginContainer">
      <div className="loginTitle">
        <h2>Welcome ToDo Page</h2>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          className="loginInput"
          placeholder={userName}
          id="name"
          type="text"
          name={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="loginButtonContainer">
          <button className="loginSkip btn"> Skip</button>
          <button className="loginSubmit btn" disabled={!name}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
