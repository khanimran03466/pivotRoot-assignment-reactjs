import React from "react";
import CheckButtons from "./CheckButtons";

const Brands = ({ compName, onChangeHandler, data }) => {
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
          checked={data[compName]?.includes("Rolex")}
          id="Rolex"
          label="Rolex"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Apple")}
          id="Apple"
          label="Apple"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Aspen")}
          id="Aspen"
          label="Aspen"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Armanin Exchange")}
          id="Armanin Exchange"
          label="Armanin Exchange"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Ball")}
          id="Ball"
          label="Ball"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Hugo Boss")}
          id="Hugo Boss"
          label="Hugo Boss"
          onChange={onChange}
        />
        <CheckButtons
          checked={data[compName]?.includes("Chanel")}
          id="Chanel"
          label="Chanel"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Brands;
