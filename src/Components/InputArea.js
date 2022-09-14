import React, { useState } from "react";

import { ThreeDots } from "react-loader-spinner";

const InputArea = ({ handleAdd, loading }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const userName = localStorage.getItem("name").toUpperCase();

  const handleAddText = (e) => {
    e.preventDefault();
    if (!text) {
      setError("Required area");
    } else if (text.length < 3) {
      setError("Please enter a valid value.");
    } else {
      handleAdd(text);
    }
    setText("");
    setTimeout(() => {
      setError("");
    }, 4000);
  };

  return (
    <div className="InputAreaContainer">
      <h2 className="InputTitle">Hello {userName ? userName : "Guess"} </h2>
      <form className={!error ? "InputForm" : "error"} onSubmit={handleAddText}>
        <input
          className="InputArea"
          placeholder="Add Task"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          {loading ? (
            <button className="InputAreaButton">Add</button>
          ) : (
            <ThreeDots
              height="30"
              width="70"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          )}
        </div>
      </form>
      {error && <span className="InputError"> {error} </span>}
    </div>
  );
};

export default InputArea;
