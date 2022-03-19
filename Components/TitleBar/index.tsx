import logo from "../../public/adi-goldstein-xKS-1DP4g7A-unsplash.jpg";
import Link from "next/link";
import Image from "next/image";
import styles from "./TitleBar.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase/firebase";

export default function TitleBar() {
  const [user, loading, error] = useAuthState(auth);
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
      <div className="topRight">
        {" "}
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
