import React from "react";

const CheckButtons = ({ id, label, borderDash }) => {
  return (
    <div className={`check-wrraper ${borderDash}`}>
      <input type="checkbox" id={id} />
      <label for={id}> {label} </label>
    </div>
  );
};

export default CheckButtons;
