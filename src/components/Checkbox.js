import React from "react";

function Checkbox({ text, id, action, name, checked }) {
  return (
    <div className="radio-group">
      <input
        type="radio"
        name={name}
        value={id}
        id={id}
        onChange={() => action(id)}
        defaultChecked={checked}
      />
      <label className="radio-label" htmlFor={id}>
        <span className="custom-radio"></span>
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
