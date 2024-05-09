"use client";
import ImageWithDesc from "@/components/ImageWithDesc";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center h-full"
    >
      <ImageWithDesc
        maxWidth="700"
        url="/myPhotos/team.png"
        description="firstText"
      />
      <ImageWithDesc
        maxWidth="500"
        photoOnRight
        url="/myPhotos/soccer.png"
        description="secondText"
      />
      <div className="w-[95%] h-60 bg-fixed my-20 bg-parallax bg-cover" />
      <ImageWithDesc
        maxWidth="500"
        url="/myPhotos/hobby.png"
        description="thirdText"
      />
      <ImageWithDesc
        photoOnRight
        maxWidth="500"
        url="/myPhotos/hobby2.png"
        description="fourthText"
      />
      <ImageWithDesc
        maxWidth="300"
        url="/landscape/project.png"
        description="fifthText"
      />
    </motion.div>
  );
}
export default About;
