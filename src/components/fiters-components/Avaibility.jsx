import React from "react";
import CheckButtons from "./CheckButtons";

const Avaibility = ({ compName, onChangeHandler, data }) => {
  const onChange = (id, value) => {
    onChangeHandler(compName, id, value);
  };
  return (
    <div className="case-size">
      <div className="case-head">
        <h2> {compName} </h2>
        <button> - </button>
      </div>

      <div className="case-size-body column">
        <CheckButtons
          checked={data[compName]?.includes("Available")}
          id="Available"
          label="Available"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Sold")}
          id="Sold"
          label="Sold"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Avaibility;
