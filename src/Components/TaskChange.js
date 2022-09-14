import React, { useState } from "react";

const TaskChange = ({ text, id, handleChange, isCompleted }) => {
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = useState(text);
  const [error, setError] = useState("");

  const handleChangeText = (e) => {
    e.preventDefault();
    if (!value || value.length < 3) {
      setValue("");
      setError("Required area");
    } else if (text === value) {
      setVisible(false);
    } else {
      handleChange(id, { content: value });
      setVisible(false);
    }
  };

  const activeContent = () => {
    if (!isCompleted) {
      setVisible(true);
    }
  };

  return (
    <div>
      {isVisible ? (
        <form onSubmit={handleChangeText} className="changeContainer">
          <input
            className="chaneInput"
            placeholder={value ? value : error}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="changeButton">Update</button>
          <div onClick={() => setVisible(false)} className="changeClose">
            x
          </div>
        </form>
      ) : (
        <div
          className={isCompleted ? "disabledInput" : "taskName"}
          onClick={activeContent}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default TaskChange;
