import React from "react";

const FormRadio = ({ label, name, value, onChange, checked }) => (
  <div className="form-radio">
    <label>
      {label}
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        required
      />
    </label>
  </div>
);

export default FormRadio;
