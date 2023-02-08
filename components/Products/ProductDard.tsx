import React from "react";
import { motion } from "framer-motion";
import { Node } from "@/schema";
import { descriptionFormater, PRODUCT_LOGO } from "@/utils";

type Props = {
  product: Node;
  handleClick: () => void;
};

export default function ProductDard({ product, handleClick }: Props) {
  const { description, name, pricing, thumbnail } = product;
  const imageURL = thumbnail?.url || PRODUCT_LOGO;
  const price = pricing.priceRange.stop.gross.amount;
  const formatedDesctiption = descriptionFormater(description);

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-1 sm:p-10 overflow-x-scroll min-h-[80%] sm:h-[600px]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={imageURL}
        alt="main"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-lg md:text-4xl font-light"> {name}</h4>
        <p className="font-bold text-sm mt-1 my-5 ">£{price}</p>
        <ul className="space-y-4 ml-5 text-md list-none">
          {formatedDesctiption.map((desctiptionLine) => {
            return <li dangerouslySetInnerHTML={{ __html: desctiptionLine }} />;
          })}
        </ul>
      </div>
      <button className="pb-1" onClick={() => handleClick()}>
        Close
      </button>
    </article>
  );
}
