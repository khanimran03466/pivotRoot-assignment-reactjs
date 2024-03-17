import React from "react";

const CheckButtons = ({ id, label, borderDash }) => {
  return (
    <div className={`check-wrraper ${borderDash}`}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}> {label} </label>
    </div>
  );
};

export default CheckButtons;
