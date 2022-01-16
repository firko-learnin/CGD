import React from "react";
import grinderIcon from "../../images/coffee-grinder-svgrepo-com.svg";
import newRecipeIcon from "../../images/addRecipe.svg";
import { Link } from "react-router-dom";

export default function TitleBar() {
  return (
    <nav className="navbar">
      <div className="navbar--links">
        <Link to="/" id="active">
          <span className="material-icons-outlined"> cottage </span>
        </Link>
        <Link to="/grinders">
          <img src={grinderIcon} alt="coffee grinders" />
        </Link>
        <Link to="/newRecipe">
          <img id="newrecipe" src={newRecipeIcon} alt="add recipe button" />
        </Link>
        <Link to="/machines">
          <span className="material-icons-outlined"> coffee_maker </span>
        </Link>
        <Link to="/roasters">
          <span className="material-icons-outlined"> storefront </span>
        </Link>
      </div>
    </nav>
  );
}
