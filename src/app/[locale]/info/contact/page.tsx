"use client";
import InfoCard from "@/components/InfoCard";
import { IconPhone, IconMailHeart, IconBrandGithub } from "@tabler/icons-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

// --TODO: add some animation when user hover a card,
// -- maybe some description or something like this

function Contact() {
  const handleCopyData = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    toast("Skopiowano do schowka", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center w-full h-[90vh]"
    >
      <div className="w-full h-[80vh] tablet:h-[60vh] bg-secondaryBackground flex flex-wrap justify-evenly items-center">
        <InfoCard
          Icon={IconPhone}
          mainText="537 886 057"
          subText="+48"
          textToCopy="537 886 057"
          onClick={handleCopyData}
        />
        <InfoCard
          Icon={IconBrandGithub}
          mainText="HajMichal"
          subText="github"
          textToCopy="https://github.com/HajMichal"
        />
        <InfoCard
          Icon={IconMailHeart}
          mainText="michalhaj.kontakt"
          subText="@gmail.com"
          textToCopy="michalhaj.kontakt@gmail.com"
          onClick={handleCopyData}
        />
      </div>
    </motion.div>
  );
}

export default Contact;
