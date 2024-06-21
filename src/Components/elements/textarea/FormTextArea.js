import React from "react";

const FormTextArea = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  </div>
);

export default FormTextArea;
