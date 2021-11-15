import React, { useEffect, useRef } from "react";
import Inspector from "./Inspector";
import { ChromePicker } from "react-color";
import Button from "./Button";
import Colors from "./Colors";
import Checkbox from "./Checkbox";
import { MdOutlineColorize } from "react-icons/md";
import { useState } from "react/cjs/react.development";

function Main(prop) {
  const {
    color,
    // colorObj,
    setColorObj,
    showColorPicker,
    setShowColorPicker,
    handleClick,
    colors,
    inputVal,
    setInputVal,
    generate,
    isError,
    setAmount,
    amount,
  } = prop;

  const picker = useRef(null);
  const [filter, setFilter] = useState("all");
  const [itemsToShow, setItemsToShow] = useState(colors);

  useEffect(() => {
    if (filter === "all") {
      setItemsToShow(colors);
      return;
    }
    const filtered = colors.filter((color) => color.type === filter);
    setItemsToShow(filtered);
  }, [colors, filter]);

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
        <p>Amount</p>
        <select
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        >
          <option value="20">5</option>
          <option value="10" defaultValue>
            10
          </option>
          <option value="5">20</option>
          <option value="2">50</option>
          <option value="1">100</option>
        </select>
        <div className="radio-wrapper">
          <Checkbox
            text="All variants"
            name="type"
            id="all"
            action={setFilter}
            checked={true}
          />
          <Checkbox
            text="Tints only"
            name="type"
            id="tint"
            action={setFilter}
          />
          <Checkbox
            text="Shades only"
            name="type"
            id="shade"
            action={setFilter}
          />
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
      <Colors colors={itemsToShow} />
    </section>
  );
}

export default Main;
