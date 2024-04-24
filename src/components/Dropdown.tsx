"use client";

import { Menu } from "@mantine/core";
import { IconPlanet } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function Dropdown() {
  const router = useRouter();

  return (
    <div className="cursor-pointer absolute right-5 top-1">
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
              router.push("/pl");
            }}
          >
            POLSKI
          </Menu.Item>
          <Menu.Item
            leftSection={"🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
            color="white"
            onClick={() => {
              router.push("/en");
            }}
          >
            ENGLISH
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
export default Dropdown;
