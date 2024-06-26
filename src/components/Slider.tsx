"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

interface SliderProps {
  imagesUrls: string[];
  className: string;
  withControls?: boolean;
  withIndicators?: boolean;
}
function Slider({
  imagesUrls,
  className,
  withControls = false,
  withIndicators = false,
}: SliderProps) {
  const [current, setCurrent] = useState(0);

  const previousSlide = useCallback(() => {
    if (current === 0) setCurrent(imagesUrls.length - 1);
    else setCurrent(current - 1);
  }, [current, imagesUrls]);

  const nextSlide = useCallback(() => {
    if (current === imagesUrls.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }, [current, imagesUrls]);

  return (
    <div
      className={`relative overflow-hidden desktop:order-first ${className}`}
    >
      <div
        className={`flex transition ease-out duration-300`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {imagesUrls?.map((url, index) => (
          <Image
            key={index}
            src={url}
            width={810}
            height={810}
            alt="mainPhoto"
            loading="eager"
          />
        ))}
      </div>
      {withControls && (
        <div className="absolute flex w-full justify-between items-center text-brand top-[50%] gap-4 opacity-85 laptop:top-auto laptop:-mt-52">
          <IconChevronLeft
            className="w-9 h-9 cursor-pointer"
            stroke={2}
            onClick={previousSlide}
          />
          <IconChevronRight
            className="w-9 h-9 cursor-pointer"
            stroke={2}
            onClick={nextSlide}
          />
        </div>
      )}
      {withIndicators && (
        <div className="absolute -mt-20 flex w-full justify-center gap-4">
          {imagesUrls?.map((url, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-5 h-2 bg-white rounded-full opacity-15 duration-300 ${
                index === current && "opacity-30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Slider;
