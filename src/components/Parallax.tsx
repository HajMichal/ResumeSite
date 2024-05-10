import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function Parallax({ bgImage }: { bgImage: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const y = useParallax(scrollYProgress, 800);
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="w-screen h-60 flex justify-center snap-mandatory scroll-smooth"
    >
      {/* <div className={`w-[95%] h-60 bg-fixed my-20 bg-cover ${bgImage}`} /> */}
      {/* <Image
        src={"/landscape/parallax.jpg"}
        alt="parallax image"
        fill={true}
        className="w-full h-full object-cover"
      /> */}
    </motion.div>
  );
}
export default Parallax;
