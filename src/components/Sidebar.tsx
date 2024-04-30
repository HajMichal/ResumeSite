import Dropdown from "./Dropdown";
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

const DesktopNavigation = dynamic(() => import("./desktop/Navigation"));
const MobileNavigation = dynamic(() => import("./mobile/Navigation"));

function Sidebar() {
  return (
    <>
      <div className="text-xl h-full flex flex-col gap-[20%] w-full tablet:min-h-screen tablet:w-44">
        <Link className="text-4xl font-jersey tracking-wide p-2" href={"/"}>
          Michal Haj
        </Link>
        <Dropdown isAbsolute />
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
    href: "/about",
    icon: (
      <IconDeviceLaptop
        className="group-hover:text-brand duration-300"
        stroke={2}
      />
    ),
  },
  {
    title: "skills",
    href: "/skills",
    icon: (
      <IconBolt className="group-hover:text-brand duration-300" stroke={2} />
    ),
  },
  {
    title: "portfolio",
    href: "/portfolio",
    icon: (
      <IconBrush className="group-hover:text-brand duration-300" stroke={2} />
    ),
  },
  {
    title: "resume",
    href: "/documents",
    icon: (
      <IconFileCv className="group-hover:text-brand duration-300" stroke={2} />
    ),
  },
  {
    title: "contact",
    href: "/contact",
    icon: (
      <IconMailHeart
        className="group-hover:text-brand duration-300"
        stroke={2}
      />
    ),
  },
];
