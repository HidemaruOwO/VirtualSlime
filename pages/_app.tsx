import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "zenn-content-css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-content-css");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
