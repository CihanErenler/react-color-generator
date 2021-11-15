import React from "react";

function Inspector({ color, handleClick, showColorPicker }) {
  return (
    <div
      className="inspector"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(!showColorPicker)}
    ></div>
  );
}

export default Inspector;
