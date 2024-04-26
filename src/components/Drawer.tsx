import { useTranslations } from "next-intl";
import Dropdown from "./Dropdown";
import {
  IconSofa,
  IconFileCv,
  IconBrush,
  IconMailHeart,
  IconBolt,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import { Link } from "@/navigation";

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
    href: "/resume",
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

function Drawer() {
  const t = useTranslations("Home.Navigation");
  return (
    <>
      <div className="text-xl h-full min-h-screen w-44 flex flex-col gap-[20%]">
        <div className="text-4xl font-jersey tracking-wide p-2">Michal Haj</div>
        <Dropdown isAbsolute />
        <div className="grid gap-1 justify-center w-44 tracking-wide">
          {navOptions.map((navOption, index) => (
            <Link
              key={index}
              href={navOption.href}
              className="flex group items-center gap-2 px-12 py-2 duration-300 hover:translate-x-3 ease-in-out hover:cursor-pointer hover:bg-secondaryBackground"
            >
              {navOption.icon}
              <p className="whitespace-nowrap">{t(navOption.title)}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Drawer;
