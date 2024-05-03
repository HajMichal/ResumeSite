import TextSection from "./TextSection";
import { useTranslations } from "next-intl";
import { type ReactElement } from "react";

interface ProjectContentProps {
  title: string;
  links?: { url: string; linkLabel: string }[];
  description: string;
  challange: string;
  techStack: ReactElement;
  whatLearnText: string;
  whatLearnPoints: string[];
}
function ProjectContent({
  title,
  links,
  description,
  challange,
  techStack,
  whatLearnText,
  whatLearnPoints,
}: ProjectContentProps) {
  const t = useTranslations("Portfolio");

  return (
    <div className="p-10 max-w-[800px] flex-1">
      <div className="flex gap-2">
        <span className="w-2 bg-gradient-to-b from-brand to-95%%" />
        <h1 className="text-2xl laptop:text-3xl">{t(title)}</h1>
      </div>
      <div className="mt-5 flex-col flex">
        {links?.map((link, index) => (
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
      <TextSection title={t("General.desc")} description={t(description)} />
      <TextSection title={t("General.challange")} description={t(challange)} />
      <TextSection title={t("General.techStack")} description={techStack} />
      <TextSection
        title={t("General.whatLearn")}
        description={
          <>
            <p>{t(whatLearnText)}</p>
            <br />
            <h2>{t("General.iveLearned")}</h2>
            <ul className="list-disc ml-5">
              {whatLearnPoints.map((point, index) => (
                <li key={index}>{t(point)}</li>
              ))}
            </ul>
          </>
        }
      />
    </div>
  );
}
export default ProjectContent;
