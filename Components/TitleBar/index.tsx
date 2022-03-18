import logo from "../../public/adi-goldstein-xKS-1DP4g7A-unsplash.jpg";
import Link from "next/link";
import Image from "next/image";
import styles from "./TitleBar.module.css";

export default function TitleBar() {
  return (
    <div className="top">
      <Link href="/management">
        <a className="topLeft">
          <div className="image-wrapper">
            <Image
              src={logo}
              alt="a cup of espresso"
              className={styles.logo}
            ></Image>
          </div>
        </a>
      </Link>
      <h1 className="topMiddle">Coffee Grind Database</h1>
      <div className="topRight"></div>
    </div>
  );
}
