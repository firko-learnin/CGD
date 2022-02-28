import grinder from "../../public/grinders.jpg";
import menu from "../../public/menu.jpg";
import machine from "../../public/machines.jpg";
import roaster from "../../public/roasters.jpg";
import Link from "next/link";

export default function LinksArea() {
  return (
    <div className="links">
      <div>
        <Link href="./grinders">
          <a>
            <h2>Grinders</h2>
            <img src={grinder} alt="coffee grinder" />
          </a>
        </Link>
        <Link href="./newRecipe">
          <a>
            <h2>New Recipe</h2>
            <img src={menu} alt="coffee menu" />
          </a>
        </Link>
      </div>
      <div>
        <Link href="./machines">
          <a>
            <h2>Machines</h2>
            <img src={machine} alt="espresso machine" />
          </a>
        </Link>
        <Link href="./roasters">
          <a>
            <h2>Roasters</h2>
            <img src={roaster} alt="coffee roasting machine" />
          </a>
        </Link>
      </div>
    </div>
  );
}
