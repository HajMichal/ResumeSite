"use client";

import { Menu } from "@mantine/core";
import { IconPlanet } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface LanguageDropdownProps {
  isAbsolute?: boolean;
}
function LanguageDropdown({ isAbsolute = false }: LanguageDropdownProps) {
  const router = useRouter();

  return (
    <div
      className={`flex cursor-pointer mr-2 items-center ${
        isAbsolute && "absolute top-1 right-0"
      }`}
    >
      <Menu withArrow>
        <Menu.Target>
          <IconPlanet
            className="w-10 h-10 duration-200 hover:scale-125"
            stroke={2}
          />
        </Menu.Target>

        <Menu.Dropdown style={{ backgroundColor: "#1d1d1d" }}>
          <Menu.Item
            leftSection={"🇵🇱"}
            color="white"
            onClick={() => {
              router.replace("/pl");
            }}
          >
            POLSKI
          </Menu.Item>
          <Menu.Item
            leftSection={"🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
            color="white"
            onClick={() => {
              router.replace("/en");
            }}
          >
            ENGLISH
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
export default LanguageDropdown;
