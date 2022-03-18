import grinder from "../../public/grinders.jpg";
import menu from "../../public/menu.jpg";
import machine from "../../public/machines.jpg";
import roaster from "../../public/roasters.jpg";
import Link from "next/link";
import Image from "next/image";

export default function LinksArea() {
  return (
    <div className="links">
      <Link href="./grinders">
        <a style={{ gridArea: "link1" }}>
          <h2>Grinders</h2>
          <Image
            className="links-img"
            src={grinder}
            alt="coffee grinder"
            width={300}
            height={300}
          ></Image>
        </a>
      </Link>
      <Link href="./newRecipe">
        <a style={{ gridArea: "link2" }}>
          <h2>New Recipe</h2>
          <Image
            src={menu}
            alt="coffee menu"
            className="links-img"
            width={300}
            height={300}
          />
        </a>
      </Link>
      <Link href="./machines">
        <a style={{ gridArea: "link3" }}>
          <h2>Machines</h2>
          <Image
            src={machine}
            alt="espresso machine"
            className="links-img"
            width={300}
            height={300}
          />
        </a>
      </Link>
      <Link href="./roasters">
        <a style={{ gridArea: "link4" }}>
          <h2>Roasters</h2>
          <Image
            src={roaster}
            alt="coffee roasting machine"
            className="links-img"
            width={300}
            height={300}
          />
        </a>
      </Link>
    </div>
  );
}
