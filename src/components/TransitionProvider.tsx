"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function TransitionProvider({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const splittedPathName = pathName.split("/");
  return (
    <AnimatePresence mode="wait">
      <section key={pathName}>
        <motion.div
          className="h-screen w-screen fixed bg-brand rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="flex items-center justify-center z-[51] fixed w-fit h-fit m-auto top-0 bottom-0 left-0 right-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-8xl font-sembold font-jersey text-background">
            {splittedPathName[splittedPathName.length - 1]}
          </p>
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-brand rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-full">{children}</div>
        <Footer />
      </section>
    </AnimatePresence>
  );
}
export default TransitionProvider;
