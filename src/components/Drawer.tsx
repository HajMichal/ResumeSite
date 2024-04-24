import { useTranslations } from "next-intl";
import Dropdown from "./Dropdown";
import {
  IconSofa,
  IconFileCv,
  IconBrush,
  IconMailHeart,
} from "@tabler/icons-react";

const navOptions = [
  { title: "home", icon: <IconSofa stroke={2} /> },
  { title: "resume", icon: <IconFileCv stroke={2} /> },
  { title: "portfolio", icon: <IconBrush stroke={2} /> },
  { title: "contact", icon: <IconMailHeart stroke={2} /> },
];

function Drawer() {
  const t = useTranslations("Home.Navigation");

  return (
    <>
      <div className="text-white text-xl font-kanit w-44 h-full min-h-screen flex flex-col gap-[20%] items-center">
        <div className="text-4xl font-jersey tracking-wide p-2">Michal Haj</div>
        <Dropdown />
        <div className="grid gap-1 w-full justify-center tracking-wide">
          {navOptions.map((navOption, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-12 py-2 duration-300 hover:translate-x-3 ease-in-out hover:cursor-pointer hover:bg-secondaryBackground"
            >
              {navOption.icon}
              <p>{t(navOption.title)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Drawer;
