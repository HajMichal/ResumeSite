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
import { type Dispatch, type SetStateAction } from "react";

const ProjectsData = [
  {
    id: 0,
    title: "Befama",
    shortDesc: "Befama.title",
    date: "15.11.2022 - 30.12.2022",
    icon: <IconBuildingFactory size={30} />,
  },
  {
    id: 1,
    title: "ChatApp",
    shortDesc: "Chatapp.title",
    date: "1.02.2023 - 30.04.2023",
    icon: <IconBrandWechat size={30} />,
  },
  {
    id: 2,
    title: "Selleo",
    shortDesc: "Selleo.title",
    date: "1.07.2023 - 31.07.2023",
    icon: <IconBrandReact size={30} />,
  },
  {
    id: 3,
    title: "IdeaRem / Przyjazna Natura",
    shortDesc: "Calculator.title",
    date: "1.08.2023 - current",
    icon: <IconCalculator size={30} />,
  },
  {
    id: 4,
    title: "RenovationAgency",
    shortDesc: "Revan.title",
    date: "10.02.2024 - current",
    icon: <IconHomeCog size={30} />,
  },
  {
    id: 5,
    title: "ElearningPlatform - Przyjazna Natura",
    shortDesc: "Elearn.title",
    date: "5.05.2024 - current",
    icon: <IconBook size={30} />,
  },
];
interface TimeLineComponentProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}
function TimeLineComponent({ active, setActive }: TimeLineComponentProps) {
  const t = useTranslations("Portfolio.Projects");

  return (
    <div>
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
            <Text c="dimmed" size="sm" className="flex">
              {t(project.shortDesc)}
              {index === 3 && (
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.gif"
                  alt="🌟"
                  width="20"
                  height="20"
                  className="h-min -mt-5"
                />
              )}
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
