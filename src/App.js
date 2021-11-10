import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Values from "values.js";
import Alert from "./components/Alert";

// const AlertContext = React.createContext();

function App() {
  const [amount, setAmount] = useState(5);
  const [showMessage, setShowMessage] = useState(false);
  const [copied, setCopied] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#fdb741");
  const [inputVal, setInputVal] = useState(color);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values("#fdb741").all(amount));
  const [colorObj, setColorObj] = useState({
    rgb: { r: 253, g: 183, b: 65, a: 1 },
    hex: "#fdb741",
  });

  useEffect(() => {
    const timeOut = setShowMessage(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [showMessage]);

  useEffect(() => {
    const newList = new Values(inputVal).all(amount);
    setList(newList);
  }, [amount]);

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
      const newList = new Values(inputVal).all(amount);
      setList(newList);
      setIsError(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  return (
    // <AlertContext.Provider value={{ setShowMessage, setCopied }}>
    <div id="main">
      {/* <Alert text={`Copied "${color}" to clipboard`} type="success" /> */}
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
        setAmount={setAmount}
        amount={amount}
      />
    </div>
    // </AlertContext.Provider>
  );
}

export default App;
