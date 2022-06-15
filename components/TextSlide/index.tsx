import { motion } from "framer-motion";
import React from "react";

type Props = {
  text: string;
  letterConfig: {};
};

export default function TextSlide({ text, letterConfig }: Props) {
  return (
    <>
      {text.split("").map((char, idx) => {
        return (
          <motion.span key={`${char} - ${idx}`} variants={letterConfig}>
            {char}
          </motion.span>
        );
      })}
    </>
  );
}
