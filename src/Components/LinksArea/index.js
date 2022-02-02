import React from "react";
import grinder from "../../images/grinders.jpg";
import menu from "../../images/menu.jpg";
import machine from "../../images/machines.jpg";
import roaster from "../../images/roasters.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export default function LinksArea() {
  return (
    <div className="links">
      <div>
        <NavLink to="./grinders">
          <h2>Grinders</h2>
          <img src={grinder} alt="coffee grinder" />
        </NavLink>
        <NavLink to="./newRecipe">
          <h2>New Recipe</h2>
          <img src={menu} alt="coffee menu" />
        </NavLink>
      </div>
      <div>
        <NavLink to="./machines">
          <h2>Machines</h2>
          <img src={machine} alt="espresso machine" />
        </NavLink>
        <NavLink to="./roasters">
          <h2>Roasters</h2>
          <img src={roaster} alt="coffee roasting machine" />
        </NavLink>
      </div>
    </div>
  );
}
