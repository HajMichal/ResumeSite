"use client";

import { useTranslations } from "next-intl";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  hidden: { opacity: 0, scale: 0 },
};

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

  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="h-screen flex items-center">
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className={`flex flex-col justify-center laptop:flex-row items-center max-w-[70vw] gap-4`}
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
        <p className="text-justify min-w-[60%] text-md tablet:text-lg laptp:text-xl desktop:text-2xl">
          {t(description)}
        </p>
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
