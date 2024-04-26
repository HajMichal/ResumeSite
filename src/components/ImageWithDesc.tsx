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
  return (
    <div
      className={`flex flex-col justify-center laptop:flex-row items-center max-w-[70vw] gap-4 mt-20`}
    >
      {!photoOnRight && (
        <Image
          src={url}
          width={569}
          height={400}
          alt="landscape"
          className={`w-auto h-auto max-w-[${maxWidth}px] object-cover`}
        />
      )}
      <p className="text-justify min-w-[60%] text-md tablet:text-lg laptp:text-xl desktop:text-2xl">
        {description}
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
    </div>
  );
}
export default ImageWithDesc;
