import React, { useState, useEffect } from "react";
import { calcBrightness } from "../utils";
import { BiCopy } from "react-icons/bi";

function SingleColor({ color, index, rgb }) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const alert = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(alert);
  }, [showAlert]);

  const { textColour } = calcBrightness(rgb);

  return (
    <div
      style={{ backgroundColor: `#${color}`, color: textColour }}
      className="single-color"
    >
      {showAlert && <p className="copy-text">Copied!</p>}
      <button className="copy-button">
        {!showAlert && (
          <BiCopy
            className="copy-icon"
            style={{ color: textColour }}
            onClick={() => {
              navigator.clipboard.writeText(`#${color}`);
              setShowAlert(true);
            }}
          />
        )}
      </button>
      <p className="hex-value">{index === 10 ? "Base Color" : `#${color}`}</p>
    </div>
  );
}

export default SingleColor;
