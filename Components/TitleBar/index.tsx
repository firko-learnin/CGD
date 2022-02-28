import logo from "../../public/adi-goldstein-xKS-1DP4g7A-unsplash.jpg";
import Link from "next/link";

export default function TitleBar() {
  return (
    <div className="top">
      <Link href="/management">
        <a>
          <img id="logo" src={logo} alt="a cup of espresso" />
        </a>
      </Link>
      <h1>Coffee Grind Database</h1>
      <div></div>
    </div>
  );
}
