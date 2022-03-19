import React, { useEffect } from "react";
import "../styles/globals.css";
import TitleBar from "../Components/TitleBar";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
import { usePush } from "../Components/Login/Login.tsx";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/firebase";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const URL = router.pathname;
  const [user, loading, error] = useAuthState(auth);
  const push = usePush();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) push("/");
    if (!user) push("/login");
  }, [user, loading, push]);

  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Component pageProps={pageProps} URL={URL} />
      <Navbar URL={URL}></Navbar>
    </div>
  );
}

export default MyApp;
