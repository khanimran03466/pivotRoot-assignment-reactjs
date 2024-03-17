import React from "react";
import CheckButtons from "./CheckButtons";

const Gender = ({ compName, onChangeHandler, data }) => {
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
          checked={data[compName]?.includes("Male")}
          id="Male"
          label="Male"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Female")}
          id="Female"
          label="Female"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Unisex")}
          id="Unisex"
          label="Unisex"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Gender;
