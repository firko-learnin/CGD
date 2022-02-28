import React from "react";
import "../styles/globals.css";
import TitleBar from "../Components/TitleBar";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const URL = router.pathname;
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Component pageProps={pageProps} URL={URL} />
      <Navbar URL={URL}></Navbar>
    </div>
  );
}

export default MyApp;
