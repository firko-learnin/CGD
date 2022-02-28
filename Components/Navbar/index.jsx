import React from "react";
import grinderIcon from "../../public/coffee-grinder-svgrepo-com.svg";
import activeGrinderIcon from "../../public/grinder-active.svg";
import newRecipeIcon from "../../public/addRecipe.svg";
import activeNewRecipeIcon from "../../public/addRecipe-active.svg";
import Link from "next/link";
import Image from "next/image";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

export default function Navbar({ URL }) {
  console.log(URL);
  return (
    <nav className="navbar">
      <div className="navbar--links">
        <Link href="/">
          <a className={URL === "/" ? "active" : null}>
            <CottageOutlinedIcon></CottageOutlinedIcon>
          </a>
        </Link>
        <Link href="/grinders">
          {URL === "/grinders" ? (
            <a>
              <Image
                src={activeGrinderIcon}
                alt="coffee grinder icon"
                height="30px"
              ></Image>
            </a>
          ) : (
            <a>
              <Image
                src={grinderIcon}
                alt="coffee grinder icon"
                height="30px"
              ></Image>
            </a>
          )}
        </Link>
        <Link href="/newRecipe">
          {URL === "/newRecipe" ? (
            <a className="active" style={{ display: "flex" }}>
              <Image
                src={activeNewRecipeIcon}
                alt="new recipe button"
                width="40px"
              ></Image>
            </a>
          ) : (
            <a style={{ display: "flex" }}>
              <Image
                src={activeNewRecipeIcon}
                alt="new recipe button"
                id="newrecipe"
                width="40px"
              ></Image>
            </a>
          )}
        </Link>
        <Link href="/machines">
          <a className={URL === "/machines" ? "active" : null}>
            <CoffeeMakerOutlinedIcon></CoffeeMakerOutlinedIcon>
          </a>
        </Link>
        <Link href="/roasters">
          <a>
            <StorefrontOutlinedIcon
              className={URL === "/roasters" ? "active" : null}
            ></StorefrontOutlinedIcon>
          </a>
        </Link>
      </div>
    </nav>
  );
}
