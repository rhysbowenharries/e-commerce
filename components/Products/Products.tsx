import React from "react";
import { motion } from "framer-motion";
import Product from "./Product";

type Props = {};

export default function Products({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1.5 }}
      className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Products
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px]">
        Hover over thumbnail for more info
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Product />
      </div>
    </motion.div>
  );
}
