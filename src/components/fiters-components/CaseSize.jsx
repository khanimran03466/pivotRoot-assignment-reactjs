import React from "react";
import CheckButtons from "./CheckButtons";

const CaseSize = ({ compName, onChangeHandler, data }) => {
  const onChange = (id, value) => {
    onChangeHandler(compName, id, value);
  };
  return (
    <div className="case-size">
      <div className="case-head">
        <h2> {compName} </h2>
        <button> - </button>
      </div>

      <div className="case-size-body">
        <CheckButtons
          checked={data[compName]?.includes("<17mm")}
          id="<17mm"
          label="<17mm"
          borderDash="dashed"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("17-19mm")}
          id="17-19mm"
          label="17-19mm"
          borderDash="dashed"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("19-22mm")}
          id="19-22mm"
          label="19-22mm"
          borderDash="dashed"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("23-25mm")}
          id="23-25mm"
          label="23-25mm"
          borderDash="dashed"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("26-28mm")}
          id="26-28mm"
          label="26-28mm"
          borderDash="dashed"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("29-31mm")}
          id="29-31mm"
          label="29-31mm"
          borderDash="dashed"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("32-34mm")}
          id="32-34mm"
          label="32-34mm"
          borderDash="dashed"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("35-37mm")}
          id="35-37mm"
          label="35-37mm"
          borderDash="dashed"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes(">50mm")}
          id=">50mm"
          label=">50mm"
          borderDash="dashed"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CaseSize;
