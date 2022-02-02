import React from "react";
import logo from "../../images/adi-goldstein-xKS-1DP4g7A-unsplash.jpg";
import { NavLink } from "react-router-dom";

export default function TitleBar() {
  return (
    <div className="top">
      <NavLink to="/management">
        <img id="logo" src={logo} alt="a cup of espresso" />
      </NavLink>
      <h1>Coffee Grind Database</h1>
      <div></div>
    </div>
  );
}
