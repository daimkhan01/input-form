import React from "react";

const FormCheckbox = ({ label, name, value, onChange, checked }) => (
  <div className="form-radio">
    <label>
      {label}
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </label>
  </div>
);

export default FormCheckbox;
