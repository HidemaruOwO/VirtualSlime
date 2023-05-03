import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "zenn-content-css";
import { useEffect } from "react";
import initTwitterScriptInner from "zenn-embed-elements/lib/init-twitter-script-inner";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements");
    import("zenn-content-css");
  }, []);
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: initTwitterScriptInner,
        }}
      />
      <script
        async
        src="https://platform.twitter.com/widgets.js"
      ></script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
