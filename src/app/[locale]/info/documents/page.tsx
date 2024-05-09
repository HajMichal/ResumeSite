"use client";
import InfoCard from "@/components/InfoCard";
import { IconFileCv } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// --TODO: add some animation when user hover a card,
// -- maybe some description or something like this
function Documents() {
  const t = useTranslations("Documents");
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center w-full h-[90vh]"
    >
      <div className=" h-[50vh] tablet:h-[60vh] w-[75vw] bg-secondaryBackground flex flex-wrap justify-evenly items-center">
        <InfoCard
          Icon={IconFileCv}
          mainText="CV - PL"
          subText={t("download")}
          fileToDownload="/MichałHaj-CV-PL.pdf"
        />
        <InfoCard
          Icon={IconFileCv}
          mainText="CV - EN"
          subText={t("download")}
          fileToDownload="/MichałHaj-CV-EN.pdf"
        />
      </div>
    </motion.div>
  );
}
export default Documents;
