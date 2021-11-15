import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function Alert({ text, type }) {
  return (
    <div className={`alert fade-in ${type}`}>
      <BsCheckCircleFill className="check-icon" />
      <p>
        <span style={{ fontWeight: "bold" }}>{text}</span> copied to clipboard
      </p>
    </div>
  );
}

export default Alert;
