import React from "react";

const FormSelect = ({ label, name, value, onChange, options }) => (
  <div>
    <label>
      {label}
      <select name={name} value={value} onChange={onChange} required>
        <option value="" disabled>
          Choose...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default FormSelect;
