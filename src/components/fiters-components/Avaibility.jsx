import React from "react";
import CheckButtons from "./CheckButtons";

const Avaibility = ({compName}) => {
  return (
    <div className="case-size">
      <div className="case-head">
        <h2> {compName} </h2>
        <button> - </button>
      </div>

      <div className="case-size-body column">
        <CheckButtons id="Available" label="Available"/>
        <CheckButtons id="Sold" label="Sold"/>
        
      </div>
    </div>
  );
};

export default Avaibility;
