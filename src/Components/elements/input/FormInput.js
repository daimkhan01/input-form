import React from "react";

const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  min,
}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      required
    />
  </div>
);

export default FormInput;
