import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function Alert({ text, type, showAlert }) {
  return (
    <div className={`alert fade-in ${type}`}>
      <BsCheckCircleFill className="check-icon" />
      <p>{text}</p>
    </div>
  );
}

export default Alert;
