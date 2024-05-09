"use client";
import TimeLineComponent from "@/components/Timeline";
import { useState } from "react";
import AllProjects from "@/components/AllProjects";
import { motion } from "framer-motion";

function Portfolio() {
  const [active, setActive] = useState(0);
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="tablet:flex px-3 h-full"
    >
      <TimeLineComponent active={active} setActive={setActive} />
      <AllProjects active={active} />
    </motion.div>
  );
}
export default Portfolio;
