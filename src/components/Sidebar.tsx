import dynamic from "next/dynamic";

import {
  IconSofa,
  IconFileCv,
  IconBrush,
  IconMailHeart,
  IconBolt,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import { Link } from "@/navigation";
import LanguageDropdown from "./LanguageDropdown";

const DesktopNavigation = dynamic(() => import("./desktop/Navigation"));
const MobileNavigation = dynamic(() => import("./mobile/Navigation"));

function Sidebar() {
  return (
    <>
      <div className="text-xl h-full flex flex-col gap-[20%] w-full tablet:min-h-screen tablet:w-44">
        <Link className="text-4xl font-jersey tracking-wide p-2" href={"/"}>
          Michal Haj
        </Link>
        <LanguageDropdown isAbsolute />
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </>
  );
}

export default Sidebar;

export const navOptions = [
  {
    title: "home",
    href: "/",
    icon: (
      <IconSofa className="group-hover:text-brand duration-300" stroke={2} />
    ),
  },
  {
    title: "about",
    href: "/info/about",
    icon: (
      <IconDeviceLaptop
        className="group-hover:text-brand duration-300"
        stroke={2}
      />
    ),
  },
  {
    title: "skills",
    href: "/info/skills",
    icon: (
      <IconBolt className="group-hover:text-brand duration-300" stroke={2} />
    ),
  },
  {
    title: "portfolio",
    href: "/info/portfolio",
    icon: (
      <IconBrush className="group-hover:text-brand duration-300" stroke={2} />
    ),
  },
  {
    title: "resume",
    href: "/info/documents",
    icon: (
      <IconFileCv className="group-hover:text-brand duration-300" stroke={2} />
    ),
  },
  {
    title: "contact",
    href: "/info/contact",
    icon: (
      <IconMailHeart
        className="group-hover:text-brand duration-300"
        stroke={2}
      />
    ),
  },
];
