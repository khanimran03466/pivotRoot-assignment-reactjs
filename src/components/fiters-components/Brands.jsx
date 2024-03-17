import React from "react";
import CheckButtons from "./CheckButtons";

const Brands = ({compName}) => {
  return (
    <div className="case-size">
      <div className="case-head">
        <h2> {compName} </h2>
        <button> - </button>
      </div>

      <div className="case-size-body column">
        <CheckButtons id="Rolex" label="Rolex"/>
        <CheckButtons id="Apple" label="Apple"/>
        <CheckButtons id="Aspen" label="Aspen"/>
        <CheckButtons id="Armanin Exchange" label="Armanin Exchange"/>
        <CheckButtons id="Ball" label="Ball"/>
        <CheckButtons id="Hugo Boss" label="Hugo Boss"/>
        <CheckButtons id="Chanel" label="Chanel"/>
        
      </div>
    </div>
  );
};

export default Brands;
