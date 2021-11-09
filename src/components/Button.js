import React from "react";

function Button({ children, className, generate }) {
  return (
    <button className={className} onClick={generate}>
      {children}
    </button>
  );
}

export default Button;
