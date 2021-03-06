import React, { useState, useEffect, useContext } from "react";
import { calcBrightness } from "../utils";
import { BiCopy } from "react-icons/bi";
import { AlertContext } from "../context/AlertContext";

function SingleColor({ color, index, rgb }) {
  const [showAlert, setShowAlert] = useState(false);
  const { setCopied, setMessage, inputVal } = useContext(AlertContext);

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
              setCopied(`#${color}`);
              setMessage({ show: true, type: "success" });
            }}
          />
        )}
      </button>
      <p className="hex-value">
        {`#${color}` === inputVal ? "Base Color" : `#${color}`}
      </p>
    </div>
  );
}

export default SingleColor;
