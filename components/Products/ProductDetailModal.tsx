import { Node, NodeObject } from "@/schema";
import { motion } from "framer-motion";
import React from "react";
import ProductDard from "./ProductDard";

type Props = {
  product: Node;
  handleClick: () => void;
};

function ProductDetailModal({ handleClick, product }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth p-20"
      >
        <div className="w-full flex flex-col overflow-x-scroll sm:p-10 ">
          <button
            className="text-white text-xl z-20 place-self-end mb-1 rounded-full bg-[#292929] w-10 h-10"
            onClick={() => handleClick()}
          >
            x
          </button>
          {product && (
            <ProductDard product={product} handleClick={() => handleClick()} />
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ProductDetailModal;
