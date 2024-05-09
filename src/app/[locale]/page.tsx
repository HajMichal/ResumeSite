"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-full flex flex-col tablet:flex-row tablet:h-screen"
    >
      <Sidebar />
      <div className="flex justify-center w-full items-center flex-col desktop:flex-row">
        <Header />
        <Slider
          imagesUrls={["/myPhotos/main.png", "/myPhotos/subMain.png"]}
          className="max-w-[540px]"
          withIndicators
        />
      </div>
    </motion.div>
  );
}
