import React from "react";
import logo from "../../images/adi-goldstein-xKS-1DP4g7A-unsplash.jpg";

export default function TitleBar() {
  return (
    <div className="top">
      <img id="logo" src={logo} alt="a cup of espresso" />
      <h1>Coffee Grind Database</h1>
      <div></div>
    </div>
  );
}
