import Dropdown from "./Dropdown";
import { navOptions } from "./Drawer";
import { Link } from "@/navigation";

function Navbar() {
  return (
    <div className="w-screen z-[99999] flex justify-between pr-4">
      <div className="text-4xl font-jersey tracking-wide p-2">Michal Haj</div>
      <div className="flex gap-10 items-center text-xl">
        {navOptions?.map((navi) => (
          <Link key={navi.href} href={navi.href}>
            {navi.title}
          </Link>
        ))}
      </div>
      <Dropdown />
    </div>
  );
}
export default Navbar;
