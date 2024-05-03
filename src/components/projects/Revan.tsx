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

function Revan() {
  return (
    <>
      <Slider imagesUrls={[]} className="max-w-[800px]" withControls />
      <ProjectContent
        title="Projects.Revan.title"
        links={[
          {
            linkLabel: "Frontend",
            url: "https://github.com/HajMichal/renovationAgency-client",
          },
          {
            linkLabel: "Backend",
            url: "https://github.com/HajMichal/RenovationAgency",
          },
        ]}
        description="Projects.Revan.desc"
        challange="Projects.Revan.challange"
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
        whatLearnText="Projects.Revan.whatLearn.text"
        whatLearnPoints={[
          "Projects.Revan.whatLearn.whatLearnPoints.first",
          "Projects.Revan.whatLearn.whatLearnPoints.second",
          "Projects.Revan.whatLearn.whatLearnPoints.third",
          "Projects.Revan.whatLearn.whatLearnPoints.fourth",
        ]}
      />
    </>
  );
}
export default Revan;
