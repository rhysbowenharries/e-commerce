import { PRODUCT_LOGO } from "@/utils";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Live out of your imagination", "Not your history"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-[300px] w-[300px] mx-auto"
        src={PRODUCT_LOGO}
        alt="rainbow flower"
      />
      <div className="z-20">
        <h2 className="text-xl uppercase text-gray-500 pb-2 tracking-[15px] ">
          Rainbow Flower
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10 hidden sm:flex">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#products">
            <button className="heroButton">Products</button>
          </Link>
          <Link href="#Sale">
            <button className="heroButton">Sale</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
