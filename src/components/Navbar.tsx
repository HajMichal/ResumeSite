import { Link } from "@/navigation";
import Dropdown from "./Dropdown";
import { navOptions } from "./Sidebar";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("Home.Navigation");
  return (
    <div className={`w-screen z-[99999] flex justify-between pr-4`}>
      <Link href={"/"} className="text-4xl font-jersey tracking-wide p-2">
        Michal Haj
      </Link>
      <div className="flex gap-10 items-center text-xl overflow-hidden">
        {navOptions?.map((navi) => (
          <Link key={navi.href} href={navi.href}>
            {t(navi.title)}
          </Link>
        ))}
      </div>
      <Dropdown />
    </div>
  );
}
export default Navbar;
