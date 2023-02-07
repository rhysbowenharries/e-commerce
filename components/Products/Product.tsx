import React from "react";
import { motion } from "framer-motion";
import { Node } from "@/schema";

type Props = {
  node: Node;
  handleClick: () => void;
};

export default function Product({ node, handleClick }: Props) {
  const { name } = node;

  const urlWithFallback = node.thumbnail?.url
    ? node.thumbnail.url
    : "images/logo.jpeg";

  return (
    <button
      className="group relative flex flex-col cursor-pointer"
      onClick={() => {
        handleClick();
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <img
          src={urlWithFallback}
          className="rounded-full object-cover w-44 h-44 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-44 h-44 rounded-lg z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100 p-3">
            {name}
          </p>
        </div>
      </div>
    </button>
  );
}
