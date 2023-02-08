import React, { useState } from "react";
import { motion } from "framer-motion";
import Product from "./Product";
import { Node, ProductsType } from "@/schema";
import ProductDetailModal from "./ProductDetailModal";
import isEmpty from "lodash/isEmpty";

type Props = {
  products: ProductsType;
};

export default function Products({ products }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [modalNode, setModalNode] = useState({});

  const nodes = products.edges.map(({ node }) => {
    return node;
  });

  const handleClick = (node: Node) => {
    setModalNode(node);
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1.5 }}
      className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <div className="absolute top-24	">
        <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
          Products
        </h3>
        <h3 className="uppercase tracking-[3px]">
          Hover over thumbnail for title
        </h3>
      </div>
      <div className="absolute top-44 h-[80%] overflow-x-scroll">
        <div className="grid md:grid-row-4 gap-5 sm:grid-cols-2 ">
          {nodes.map((node) => {
            return (
              <Product product={node} handleClick={() => handleClick(node)} />
            );
          })}
        </div>
      </div>
      {showModal && !isEmpty(modalNode) ? (
        <ProductDetailModal
          handleClick={() => setShowModal(false)}
          product={modalNode as Node}
        />
      ) : null}
    </motion.div>
  );
}
