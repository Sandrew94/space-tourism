import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import NavBar from "../NavBar";
const { v4: uuidv4 } = require("uuid");

type Props = { children: React.ReactNode; titleMeta: string };

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function Layout({ children, titleMeta }: Props) {
  return (
    <>
      <Head>
        <title>{titleMeta}</title>
      </Head>
      <NavBar />
      <motion.main
        key={uuidv4()}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </>
  );
}
