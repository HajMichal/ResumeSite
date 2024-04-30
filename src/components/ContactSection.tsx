import react from "react";
import type { IconProps, Icon } from "@tabler/icons-react";

interface ContactSectinProps {
  Icon: react.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & react.RefAttributes<Icon>
  >;
  mainText: string;
  subText?: string;
}
function ContactSection({ Icon, mainText, subText }: ContactSectinProps) {
  return (
    <div className="flex flex-col items-center w-44">
      <div className="p-5 rounded-full w-min h-min bg-background">
        <Icon
          stroke={1}
          className="text-brand w-14 h-14 laptop:w-20 laptop:h-20 cursor-pointer"
        />
      </div>
      <p className="mt-2 text-2xl laptop:text-3xl desktop:text-4xl">
        {mainText}
      </p>
      <p>{subText}</p>
    </div>
  );
}
export default ContactSection;
