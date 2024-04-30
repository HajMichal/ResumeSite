import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { navOptions } from "../Sidebar";

function DesktopNavigation() {
  const t = useTranslations("Home.Navigation");
  return (
    <div className="hidden gap-1 justify-center w-44 tracking-wide tablet:grid">
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
  );
}
export default DesktopNavigation;
