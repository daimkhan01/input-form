import React from "react";

const SearchInput = ({ value, onChange, type, placeholder, clearAllData }) => (
  <div className="search-container">
    <div className="input-wraper">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
    <div className="search-btn">
      <button type="button" onClick={clearAllData}>
        Clear All Data
      </button>
    </div>
  </div>
);
export default SearchInput;
