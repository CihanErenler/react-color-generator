import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoIosAlert } from "react-icons/io";

function Alert({ text, type }) {
  return (
    <div className={`alert fade-in ${type}`}>
      {type === "success" ? (
        <BsCheckCircleFill className="check-icon" />
      ) : (
        <IoIosAlert className="alert-icon" />
      )}
      {type === "success" ? (
        <p>
          <span style={{ fontWeight: "bold" }}>{text}</span> copied to clipboard
        </p>
      ) : (
        <p>Please use a correct hex code</p>
      )}
    </div>
  );
}

export default Alert;
