import React from "react";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div className="container">
        <img className="symbol" src={logo} alt="" />
        <h1 className="logo">Color Generator</h1>
      </div>
    </header>
  );
}

export default Header;
