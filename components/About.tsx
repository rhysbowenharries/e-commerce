import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center p-20"
    >
      <h3 className="absoloute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="images/about.jpeg"
        alt="girl with flower in her mouth"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis
          ratione obcaecati id, alias inventore nisi deleniti commodi eum,
          explicabo aperiam architecto ab assumenda, odio impedit recusandae
          quas laudantium officia. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis voluptatum eos illum voluptatibus
          repellat eum! Tenetur iure qui soluta quos culpa veniam perferendis,
          quia dolores, possimus corrupti corporis nemo temporibus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Iusto fugit explicabo
          illum voluptate quaerat aspernatur minima voluptatum voluptas impedit
          suscipit libero praesentium amet nam in tenetur, expedita
          necessitatibus rem repellat.
        </p>
      </div>
    </motion.div>
  );
}
