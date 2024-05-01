"use client";

import {
  IconBrandWechat,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import { Timeline, Text } from "@mantine/core";

const TimeLineData = [
  {
    id: 0,
    title: "Befama",
    shortDesc: "BefamaShortDesc",
    date: "15.11.2022 - 30.12.2022",
  },
  {
    id: 1,
    title: "ChatApp",
    shortDesc: "ChatAppShortDesc",
    date: "1.02.2023 - 30.04.2023",
  },
  {
    id: 2,
    title: "Selleo",
    shortDesc: "SelleoShortDesc",
    date: "1.07.2023 - 31.07.2023",
  },
  {
    id: 3,
    title: "Calcualtor",
    shortDesc: "CalculatorShortDesc",
    date: "1.08.2023 - current",
  },
  {
    id: 4,
    title: "RenovationAgency",
    shortDesc: "RenovationAgencyShortDesc",
    date: "10.02.2024 - current",
  },
  {
    id: 5,
    title: "ElearningPlatform",
    shortDesc: "ELearnShortDesc",
    date: "5.05.2024 - current",
  },
];

function TimeLineComponent() {
  return (
    <Timeline active={0} bulletSize={50} lineWidth={4} color="teal">
      <Timeline.Item
        bullet={<IconBrandWechat size={30} />}
        title="ChatApp"
        className="h-28"
        styles={{ itemTitle: { color: "white", fontWeight: 600 } }}
      >
        <Text c="dimmed" size="sm">
          Aplikacja do czatowania w czasie rzeczywistym
        </Text>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">
          You&apos;ve pushed 23 commits to
          <Text variant="link" component="span" inherit>
            fix-notifications branch
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          52 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
      >
        <Text c="dimmed" size="sm">
          You&apos;ve submitted a pull request
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          34 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{" "}
          left a code review on your pull request
        </Text>
        <Text size="xs" mt={4}>
          12 minutes ago
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
export default TimeLineComponent;
