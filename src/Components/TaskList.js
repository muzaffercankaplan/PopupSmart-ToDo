import React from "react";
import "../styles/Global.css";
import TaskChange from "./TaskChange";

const TaskList = ({ data, handleDelete, handleChange, filtered }) => {
  return (
    <div className="taskListContainer">
      {data
        ?.filter((item) => {
          if (filtered === "completed" && item.isCompleted) {
            return item.isCompleted;
          } else if (filtered === "active" && !item.isCompleted) {
            return !item.isCompleted;
          } else if (filtered === "all") {
            return item;
          } else {
            return "";
          }
        })
        .map(({ content, isCompleted, id }) => (
          <div className="taskContainer" key={id}>
            <div style={{ display: "flex" }}>
              <input
                className="taskInput"
                type="checkbox"
                checked={isCompleted}
                value={isCompleted}
                onChange={() => handleChange(id, { isCompleted: !isCompleted })}
              />
              <TaskChange
                id={id}
                isCompleted={isCompleted}
                text={content}
                handleChange={handleChange}
              />
            </div>
            <div className="taskCancel" onClick={() => handleDelete(id)}>
              X
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
