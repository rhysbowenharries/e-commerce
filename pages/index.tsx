import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Ajeeb</title>
      </Head>

      <Header />
    </div>
  );
}
