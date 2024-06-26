import dynamic from "next/dynamic";
import ProjectContent from "../ProjectContent";
import {
  ReactIcon,
  TypeScriptIcon,
  ReactRouterIcon,
  PrismaIcon,
  SassIcon,
  NodeJsIcon,
} from "@/icons";
import { NestJsIcon } from "@/icons/nestjs";

const Slider = dynamic(() => import("@/components/Slider"));

function Revan() {
  return (
    <>
      <Slider
        imagesUrls={[
          "/projects/revan/revan.webp",
          "/projects/revan/revanAPI.webp",
          "/projects/revan/revan2.webp",
          "/projects/revan/revan3.webp",
          "/projects/revan/revan4.webp",
        ]}
        className="max-w-[800px]"
        withControls
      />
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
            <TypeScriptIcon />
            <ReactIcon />
            <ReactRouterIcon />
            <SassIcon />
            <NodeJsIcon />
            <NestJsIcon />
            <PrismaIcon />
          </div>
        }
        whatLearnText="Projects.Revan.whatLearn.text"
        whatLearnPoints={[
          "Projects.Revan.whatLearn.whatLearnPoints.first",
          "Projects.Revan.whatLearn.whatLearnPoints.second",
          "Projects.Revan.whatLearn.whatLearnPoints.third",
        ]}
      />
    </>
  );
}
export default Revan;
