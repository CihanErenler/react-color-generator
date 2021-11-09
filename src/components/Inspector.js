import React from "react";
import { calcBrightness } from "../utils";

function Inspector({ rgb, handleClick, showColorPicker }) {
  const { backgroundColour } = calcBrightness(Object.values(rgb));
  return (
    <div
      className="inspector"
      style={{ backgroundColor: backgroundColour }}
      onClick={() => handleClick(!showColorPicker)}
    ></div>
  );
}

export default Inspector;
