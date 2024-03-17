import React from "react";
import CheckButtons from "./CheckButtons";

const Gender = ({compName}) => {
  return (
    <div className="case-size">
      <div className="case-head">
        <h2> {compName} </h2>
        <button> - </button>
      </div>

      <div className="case-size-body column">
        <CheckButtons id="Male" label="Male"/>
        <CheckButtons id="Female" label="Female"/>
        <CheckButtons id="Unisex" label="Unisex"/>
        
      </div>
    </div>
  );
};

export default Gender;
