"use client";
import {
  IconBrandWechat,
  IconBuildingFactory,
  IconBrandReact,
  IconCalculator,
  IconHomeCog,
  IconBook,
} from "@tabler/icons-react";
import { Timeline, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { useState } from "react";

const ProjectsData = [
  {
    id: 0,
    title: "Befama",
    shortDesc: "BefamaShortDesc",
    date: "15.11.2022 - 30.12.2022",
    icon: <IconBuildingFactory size={30} />,
  },
  {
    id: 1,
    title: "ChatApp",
    shortDesc: "ChatAppShortDesc",
    date: "1.02.2023 - 30.04.2023",
    icon: <IconBrandWechat size={30} />,
  },
  {
    id: 2,
    title: "Selleo",
    shortDesc: "SelleoShortDesc",
    date: "1.07.2023 - 31.07.2023",
    icon: <IconBrandReact size={30} />,
  },
  {
    id: 3,
    title: "IdeaRem / Przyjazna Natura",
    shortDesc: "CalculatorShortDesc",
    date: "1.08.2023 - current",
    icon: <IconCalculator size={30} />,
  },
  {
    id: 4,
    title: "RenovationAgency",
    shortDesc: "RenovationAgencyShortDesc",
    date: "10.02.2024 - current",
    icon: <IconHomeCog size={30} />,
  },
  {
    id: 5,
    title: "ElearningPlatform - Przyjazna Natura",
    shortDesc: "ELearnShortDesc",
    date: "5.05.2024 - current",
    icon: <IconBook size={30} />,
  },
];
function TimeLineComponent() {
  const t = useTranslations("Portfolio.Projects");
  const [active, setActive] = useState(0);

  return (
    <div className="h-full">
      <Timeline
        active={active}
        bulletSize={50}
        lineWidth={4}
        color="teal"
        className="w-80 sticky mt-24 top-24 ml-2 mb-10 "
      >
        {ProjectsData.map((project, index) => (
          <Timeline.Item
            bullet={project.icon}
            title={project.title}
            className="h-20 desktop:h-28 cursor-pointer"
            styles={{ itemTitle: { color: "white", fontWeight: 600 } }}
            onClick={() => setActive(index)}
            key={index}
          >
            <Text c="dimmed" size="sm">
              {t(project.shortDesc)}
            </Text>
            <Text size="xs" mt={4} c={"white"}>
              {project.date}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
export default TimeLineComponent;
