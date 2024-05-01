import { Link } from "@/navigation";
import { ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandLeetcode,
  IconBrandGithub,
  IconBrandTwitch,
  IconBrandLinkedin,
} from "@tabler/icons-react";

function Footer() {
  return (
    <div className="h-44 bg-secondaryBackground flex items-center justify-around">
      <p className="text-4xl font-jersey">Michał Haj</p>
      <Group gap={10} justify="flex-end" wrap="nowrap">
        <ActionIcon size="lg" color="gray" variant="subtle">
          <Link
            href={"https://www.linkedin.com/in/micha%C5%82-haj-5795172b6/"}
            target="_blank"
          >
            <IconBrandLinkedin
              style={{ width: rem(36), height: rem(36) }}
              stroke={1.5}
            />
          </Link>
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
          <Link href={"https://github.com/HajMichal"} target="_blank">
            <IconBrandGithub
              style={{ width: rem(36), height: rem(36) }}
              stroke={1.5}
            />
          </Link>
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
          <Link href={"https://www.twitch.tv/maaluchy"} target="_blank">
            <IconBrandTwitch
              style={{ width: rem(36), height: rem(36) }}
              stroke={1.5}
            />
          </Link>
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
          <Link href={"https://www.codewars.com/users/Brux"} target="_blank">
            <IconBrandLeetcode
              style={{ width: rem(36), height: rem(36) }}
              stroke={1.5}
            />
          </Link>
        </ActionIcon>
      </Group>
    </div>
  );
}
export default Footer;
