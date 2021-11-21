import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Values from "values.js";
import Alert from "./components/Alert";
import { AlertContext } from "./context/AlertContext";

function App() {
  const [amount, setAmount] = useState(10);
  const [copied, setCopied] = useState("");
  const [message, setMessage] = useState({ show: false, type: "success" });
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
    const timeOut = setTimeout(() => {
      setMessage({ show: false, type: "seccess" });
    }, 4000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [copied]);

  useEffect(() => {
    const newList = new Values(inputVal).all(amount);
    setList(newList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      if (inputVal !== color) {
        setColor(inputVal);
      }
      const newList = new Values(inputVal).all(amount);
      setList(newList);
      setIsError(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <div id="main">
      {message.show && <Alert text={copied} type={message.type} />}
      <AlertContext.Provider value={{ setCopied, setMessage, inputVal }}>
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
      </AlertContext.Provider>
    </div>
  );
}

export default App;
