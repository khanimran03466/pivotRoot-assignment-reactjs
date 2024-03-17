import React from "react";

const CheckButtons = ({ id, label, borderDash, onChange, checked }) => {
  return (
    <div className={`check-wrraper ${borderDash}`}>
      <input
        type="checkbox"
        id={id}
        onChange={(e) => onChange(id, e.target.checked)}
        checked={checked}
      />
      <label htmlFor={id}> {label} </label>
    </div>
  );
};

export default CheckButtons;
