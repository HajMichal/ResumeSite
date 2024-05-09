"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageWithDescProps {
  url: string;
  description: string;
  maxWidth: string;
  photoOnRight?: boolean;
}
function ImageWithDesc({
  maxWidth,
  url,
  description,
  photoOnRight = false,
}: ImageWithDescProps) {
  const t = useTranslations("About");

  return (
    <div className="h-screen flex items-center">
      <motion.div
        className={`flex flex-col justify-center laptop:flex-row items-center max-w-[70vw] gap-4`}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
        viewport={{
          once: true,
        }}
      >
        {!photoOnRight && (
          <Image
            src={url}
            width={569}
            height={400}
            alt="landscape"
            className={`w-full h-auto max-w-[${maxWidth}px] object-cover`}
          />
        )}
        <motion.p className="text-justify min-w-[60%] text-md tablet:text-lg laptp:text-xl desktop:text-2xl">
          {t(description)}
        </motion.p>
        {photoOnRight && (
          <Image
            src={url}
            width={569}
            height={400}
            alt="landscape"
            className={`w-auto max-w-[${maxWidth}px]`}
          />
        )}
      </motion.div>
    </div>
  );
}
export default ImageWithDesc;
