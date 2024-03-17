import React from "react";
import CheckButtons from "./CheckButtons";

const CaseSize = ({compName}) => {
  return (
    <div className="case-size">
      <div className="case-head">
        <h2> {compName} </h2>
        <button> - </button>
      </div>

      <div className="case-size-body">
        <CheckButtons id="17mm" label="<17mm" borderDash="dashed"/>
        <CheckButtons id="17-19mm" label="17-19mm" borderDash="dashed"/>
        <CheckButtons id="19-22mm" label="19-22mm" borderDash="dashed"/>
        <CheckButtons id="23-25mm" label="23-25mm" borderDash="dashed"/>
        <CheckButtons id="26-28mm" label="26-28mm" borderDash="dashed"/>
        <CheckButtons id="29-31mm" label="29-31mm" borderDash="dashed"/>
        <CheckButtons id="32-34mm" label="32-34mm" borderDash="dashed"/>
        <CheckButtons id="35-37mm" label="35-37mm" borderDash="dashed"/>
        <CheckButtons id=">50mm" label=">50mm" borderDash="dashed"/>
      </div>
    </div>
  );
};

export default CaseSize;
