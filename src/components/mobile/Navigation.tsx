import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { navOptions } from "../Sidebar";

function Navigation() {
  const t = useTranslations("Home.Navigation");
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-5 mt-20 px-3 tablet:hidden">
      {navOptions.map((navOption, index) => (
        <Link
          key={index}
          href={navOption.href}
          className="w-52 h-52 group flex items-center justify-center gap-2 bg-secondaryBackground duration-300 hover:translate-x-3 hover:-translate-y-3 ease-in-out"
        >
          {navOption.icon}
          <p className="whitespace-nowrap">{t(navOption.title)}</p>
        </Link>
      ))}
    </div>
  );
}
export default Navigation;
