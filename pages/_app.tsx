import "../styles/globals.css";
import "../styles/SwiperPagination.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import React from "react";
import { AuthContextProvider } from "context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no"
        />
      </Head>
      {/* <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      > */}
      <Component {...pageProps} />
      {/* </AnimatePresence> */}
    </AuthContextProvider>
  );
}

export default MyApp;
