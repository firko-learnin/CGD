import React, { useEffect, useState, useRef } from "react";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./Login.module.css";
import Link from "next/link";
import type { NextRouter } from "next/router";
import { useRouter } from "next/router";

export function usePush(): NextRouter["push"] {
  const router = useRouter();
  const routerRef = useRef(router);

  routerRef.current = router;

  const [{ push }] = useState<Pick<NextRouter, "push">>({
    push: (path) => routerRef.current.push(path),
  });
  return push;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const push = usePush();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) push("/");
  }, [user, loading, push]);

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <input
          type="text"
          className={styles.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className={styles.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className={styles.login__btn}
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button
          className={`${styles.login__btn} ${styles.login__google}`}
          onClick={signInWithGoogle}
        >
          Login with Google
        </button>
        <div>
          <Link href="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link href="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;
