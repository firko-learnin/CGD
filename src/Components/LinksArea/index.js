import React from "react";
import grinder from "../../images/grinders.jpg";
import menu from "../../images/menu.jpg";
import machine from "../../images/machines.jpg";
import roaster from "../../images/roasters.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function LinksArea() {
  return (
    <div className="links">
      <div>
        <Link to="./grinders">
          <h2>Grinders</h2>
          <img src={grinder} alt="coffee grinder" />
        </Link>
        <a href="./newRecipe">
          <h2>New Recipe</h2>
          <img src={menu} alt="coffee menu" />
        </a>
      </div>
      <div>
        <a href="./machines">
          <h2>Machines</h2>
          <img src={machine} alt="espresso machine" />
        </a>
        <a href="./roasters">
          <h2>Roasters</h2>
          <img src={roaster} alt="coffee roasting machine" />
        </a>
      </div>
    </div>
  );
}
