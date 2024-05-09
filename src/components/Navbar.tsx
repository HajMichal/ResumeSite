import { Link } from "@/navigation";
import LanguageDropdown from "./LanguageDropdown";
import { navOptions } from "./Sidebar";
import { useTranslations } from "next-intl";
import NavigationDropdown from "./NavigationDropdown";

function Navbar() {
  const t = useTranslations("Home.Navigation");
  return (
    <div className={`w-screen z-[99999] flex justify-between pr-4`}>
      <Link href={"/"} className="text-4xl font-jersey tracking-wide p-2">
        Michal Haj
      </Link>
      <div className="gap-10 items-center text-xl overflow-hidden hidden laptop:flex">
        {navOptions?.map((navi) => (
          <Link
            key={navi.href}
            href={navi.href}
            className="expand whitespace-nowrap"
          >
            {t(navi.title)}
          </Link>
        ))}
      </div>
      <span className="flex gap-10">
        <NavigationDropdown />
        <LanguageDropdown />
      </span>
    </div>
  );
}
export default Navbar;
