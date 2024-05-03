import dynamic from "next/dynamic";
import ProjectContent from "../ProjectContent";
import {
  ReactIcon,
  TypeScriptIcon,
  NextJsIcon,
  FramerMotionIcon,
  TailwindIcon,
  ExpressIcon,
  ReactRouterIcon,
  PrismaIcon,
  TrpcIcon,
} from "@/icons";

const Slider = dynamic(() => import("@/components/Slider"));

function IdeaRem() {
  return (
    <>
      <Slider
        imagesUrls={[
          "/projects/calculator/calc1.webp",
          "/projects/calculator/calc2.webp",
          "/projects/calculator/calc3.webp",
          "/projects/calculator/calc4.webp",
          "/projects/calculator/calc5.webp",
          "/projects/calculator/calc6.webp",
          "/projects/calculator/calc7.webp",
          "/projects/calculator/calc8.webp",
        ]}
        className="max-w-[800px]"
        withControls
      />
      <ProjectContent
        title="Projects.Calculator.title"
        links={[
          {
            linkLabel: "www.github.com/HajMichal/Ridea-Rem",
            url: "https://github.com/HajMichal/Ridea-Rem",
          },
        ]}
        description="Projects.Calculator.desc"
        challange="Projects.Calculator.challange"
        techStack={
          <div className="flex flex-wrap gap-5 mt-2">
            <ReactIcon />
            <TypeScriptIcon />
            <FramerMotionIcon />
            <TailwindIcon />
            <NextJsIcon />
            <PrismaIcon />
            <TrpcIcon />
          </div>
        }
        whatLearnText="Projects.Calculator.whatLearn.text"
        whatLearnPoints={[
          "Projects.Calculator.whatLearn.whatLearnPoints.first",
          "Projects.Calculator.whatLearn.whatLearnPoints.second",
          "Projects.Calculator.whatLearn.whatLearnPoints.third",
          "Projects.Calculator.whatLearn.whatLearnPoints.fourth",
        ]}
      />
    </>
  );
}
export default IdeaRem;
