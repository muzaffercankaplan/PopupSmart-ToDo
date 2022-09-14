import React from "react";

const Filtered = ({ data, setFiltered }) => {
  return (
    <div>
      {data?.length ? (
        <div className="filteredContainer">
          <span className="filteredActive"> Active : {data?.length} </span>
          <div>
            <span className="spn" onClick={() => setFiltered("all")}>
              All
            </span>
            <span className="spn" onClick={() => setFiltered("active")}>
              Active
            </span>
            <span className="spn" onClick={() => setFiltered("completed")}>
              Completed
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filtered;
