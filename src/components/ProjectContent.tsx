import {
  ReactIcon,
  TypeScriptIcon,
  NextJsIcon,
  FramerMotionIcon,
  TailwindIcon,
} from "@/icons";
import TextSection from "./TextSection";
import { useTranslations } from "next-intl";

interface ProjectContentProps {
  title: string;
  links: { url: string; linkLabel: string }[];
}
function ProjectContent({ title, links }: ProjectContentProps) {
  const t = useTranslations("Portfolio");

  return (
    <div className="p-10 max-w-[800px] flex-1">
      <div className="flex gap-2">
        <span className="w-2 bg-gradient-to-b from-brand to-95%%" />
        <h1 className="text-2xl laptop:text-3xl">{t(title)}</h1>
      </div>
      <div className="mt-5 flex-col flex">
        {links.map((link, index) => (
          <a
            href={link.url}
            target="_blank"
            className="underline text-lg text-[#8c918d]"
            key={index}
          >
            {link.linkLabel}
          </a>
        ))}
      </div>
      <TextSection
        title={t("General.desc")}
        description={t("Projects.Befama.desc")}
      />
      <TextSection
        title={t("General.challange")}
        description={t("Projects.Befama.challange")}
      />
      <TextSection
        title={t("General.techStack")}
        description={
          <div className="flex flex-wrap gap-5 mt-2">
            <ReactIcon />
            <TypeScriptIcon />
            <NextJsIcon />
            <FramerMotionIcon />
            <TailwindIcon />
          </div>
        }
      />
      <TextSection
        title={t("General.whatLearn")}
        description={
          <>
            <p>{t("Projects.Befama.whatLearn.text")}</p>
            <br />
            <h2>{t("General.iveLearned")}</h2>
            <ul className="list-disc ml-5">
              <li> {t("Projects.Befama.whatLearn.whatLearnPoints.first")}</li>
              <li>{t("Projects.Befama.whatLearn.whatLearnPoints.second")}</li>
              <li>{t("Projects.Befama.whatLearn.whatLearnPoints.third")}</li>
              <li>{t("Projects.Befama.whatLearn.whatLearnPoints.fourth")}</li>
            </ul>
          </>
        }
      />
    </div>
  );
}
export default ProjectContent;
