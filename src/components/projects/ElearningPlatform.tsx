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
} from "@/icons";

const Slider = dynamic(() => import("@/components/Slider"));

function ElearningPlatform() {
  return (
    <>
      <Slider imagesUrls={[]} className="max-w-[800px]" withControls />
      <ProjectContent
        title="Projects.Elearn.title"
        links={[
          {
            linkLabel: "www.github.com/HajMichal/RealTimeChatApp",
            url: "https://github.com/HajMichal/RealTimeChatApp",
          },
        ]}
        description="Projects.Elearn.desc"
        challange="Projects.Elearn.challange"
        techStack={
          <div className="flex flex-wrap gap-5 mt-2">
            <ReactIcon />
            <TypeScriptIcon />
            <FramerMotionIcon />
            <TailwindIcon />
            <ReactRouterIcon />
            <ExpressIcon />
            <PrismaIcon />
          </div>
        }
        whatLearnText="Projects.Elearn.whatLearn.text"
        whatLearnPoints={[
          "Projects.Elearn.whatLearn.whatLearnPoints.first",
          "Projects.Elearn.whatLearn.whatLearnPoints.second",
          "Projects.Elearn.whatLearn.whatLearnPoints.third",
          "Projects.Elearn.whatLearn.whatLearnPoints.fourth",
        ]}
      />
    </>
  );
}
export default ElearningPlatform;
