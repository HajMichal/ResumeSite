import react from "react";
import type { IconProps, Icon } from "@tabler/icons-react";

interface ContactSectinProps {
  Icon: react.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & react.RefAttributes<Icon>
  >;
  mainText: string;
  onClick?: (textToCopy: string) => void;
  textToCopy?: string;
  subText?: string;
  fileToDownload?: string;
}
function InfoCard({
  Icon,
  mainText,
  subText,
  onClick,
  textToCopy,
  fileToDownload,
}: ContactSectinProps) {
  const handleHref = () => {
    if (onClick) return undefined;
    else return fileToDownload ?? textToCopy;
  };
  return (
    <a
      className="flex flex-col items-center w-48 duration-300 hover:scale-110"
      onClick={() => textToCopy && onClick && onClick(textToCopy)}
      href={handleHref()}
      download={fileToDownload}
      target="_blank"
    >
      <div className="p-5 rounded-full w-min h-min bg-background">
        <Icon
          stroke={1}
          className="text-brand w-14 h-14 laptop:w-20 laptop:h-20 cursor-pointer"
        />
      </div>
      <p className="mt-2 text-2xl laptop:text-3xl desktop:text-4xl whitespace-nowrap">
        {mainText}
      </p>
      <p>{subText}</p>
    </a>
  );
}
export default InfoCard;
