import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Values from "values.js";

function App() {
  const [amount, setAmount] = useState(10);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#000");
  const [inputVal, setInputVal] = useState(color);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values("#06f").all(amount));
  const [colorObj, setColorObj] = useState({
    rgb: { r: 0, g: 102, b: 255, a: 1 },
    hex: "#06f",
  });

  useEffect(() => {
    setColor(colorObj.hex);
  }, [colorObj]);

  useEffect(() => {
    setInputVal(color);
  }, [color]);

  const handleClick = () => {
    setShowColorPicker((current) => !current);
  };

  const handleGenerateColor = () => {
    try {
      const newList = new Values(inputVal).all();
      setList(newList);
      setIsError(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <section id="main">
      <Header />
      <Main
        color={color}
        setColor={setColorObj}
        colorObj={colorObj}
        setColorObj={setColorObj}
        showColorPicker={showColorPicker}
        setShowColorPicker={setShowColorPicker}
        handleClick={handleClick}
        colors={list}
        generate={handleGenerateColor}
        inputVal={inputVal}
        setInputVal={setInputVal}
        isError={isError}
      />
    </section>
  );
}

export default App;
