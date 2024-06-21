import React from "react";

export default function Buttons(props) {
  return (
    <div className="form_btn">
      <button type="submit">{!props.isUpdating ? `Add` : `Update`}</button>
      <button type="button" onClick={props.resetForm}>
        Reset
      </button>
    </div>
  );
}
