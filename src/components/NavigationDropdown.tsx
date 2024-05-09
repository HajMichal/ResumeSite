"use client";

import { Menu } from "@mantine/core";
import { IconBurger } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { navOptions } from "./Sidebar";

function NavigationDropdown() {
  const router = useRouter();

  return (
    <div className="flex cursor-pointer mr-2 items-center laptop:hidden">
      <Menu withArrow>
        <Menu.Target>
          <IconBurger
            className="w-10 h-10 duration-200 hover:scale-125"
            stroke={2}
          />
        </Menu.Target>

        <Menu.Dropdown style={{ backgroundColor: "#1d1d1d" }}>
          {navOptions.map((navi, index) => (
            <Menu.Item
              onClick={() => router.push(navi.href)}
              color="white"
              leftSection={navi.icon}
              key={index}
              className="py-5"
            >
              <p className="expand whitespace-nowrap">{navi.title}</p>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
export default NavigationDropdown;
