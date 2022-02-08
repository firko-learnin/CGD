import React from "react";
import grinderIcon from "../../images/coffee-grinder-svgrepo-com.svg";
import activeGrinderIcon from "../../images/grinder-active.svg";
import newRecipeIcon from "../../images/addRecipe.svg";
import activeNewRecipeIcon from "../../images/addRecipe-active.svg";
import { NavLink } from "react-router-dom";

export default function Navbar({ URL }) {
  return (
    <nav className="navbar">
      <div className="navbar--links">
        <NavLink activeclassname="active" to="/">
          <span className={"material-icons-outlined"}>cottage</span>
        </NavLink>
        <NavLink activeclassname="active" to="/grinders">
          {URL === "/grinders" ? (
            <img src={activeGrinderIcon} alt="coffee grinders" />
          ) : (
            <img src={grinderIcon} alt="coffee grinders" />
          )}
        </NavLink>
        <NavLink activeclassname="active" to="/newRecipe">
          {URL === "/newRecipe" ? (
            <img
              id="newrecipe"
              src={activeNewRecipeIcon}
              alt="add recipe button"
            />
          ) : (
            <img id="newrecipe" src={newRecipeIcon} alt="add recipe button" />
          )}
        </NavLink>
        <NavLink activeclassname="active" to="/machines">
          <span className="material-icons-outlined"> coffee_maker </span>
        </NavLink>
        <NavLink activeclassname="active" to="/roasters">
          <span className="material-icons-outlined"> storefront </span>
        </NavLink>
      </div>
    </nav>
  );
}
