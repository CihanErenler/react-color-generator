import React, { useEffect, useRef } from "react";
import Inspector from "./Inspector";
import { ChromePicker } from "react-color";
import Button from "./Button";
import Colors from "./Colors";
import { MdOutlineColorize } from "react-icons/md";

function Main(prop) {
  const {
    color,
    colorObj,
    setColorObj,
    showColorPicker,
    setShowColorPicker,
    handleClick,
    colors,
    inputVal,
    setInputVal,
    generate,
    isError,
  } = prop;

  const picker = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (
        picker.current &&
        !picker.current.contains(event.target) &&
        !event.target.classList.contains("inspector") &&
        !event.target.classList.contains("picker-icon")
      ) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <section>
      <div className="picker-wrap">
        <h1 className="picker-title">Color Palette Generator</h1>
        <div className="input-wrapper">
          <Inspector
            text={color}
            rgb={colorObj.rgb}
            color={color}
            handleClick={handleClick}
            showColorPicker={showColorPicker}
          />
          <input
            className={`color-name ${isError ? "error" : null}`}
            type="text"
            placeholder="Color Hex Code"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className="picker-icon" onClick={handleClick}>
            <MdOutlineColorize className="picker-icon-i" />
          </button>
        </div>
        {showColorPicker && (
          <div ref={picker} className="picker-container">
            <ChromePicker
              color={color}
              onChange={(pickedColor) => setColorObj(pickedColor)}
            />
          </div>
        )}
        <Button className="btn btn-primary" generate={generate}>
          Generate Colors
        </Button>
      </div>
      <Colors colors={colors} />
    </section>
  );
}

export default Main;
