import React from "react";
import TitleBar from "../TitleBar";
import Navbar from "../Navbar";
import LinksArea from "../LinksArea";

export default function Home() {
  return (
    <main>
      <TitleBar></TitleBar>
      <p>Welcome to the future of espresso 🔮</p>
      <LinksArea></LinksArea>
      <Navbar></Navbar>
    </main>
  );
}
