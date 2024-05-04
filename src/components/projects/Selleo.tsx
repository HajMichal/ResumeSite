import dynamic from "next/dynamic";
import ProjectContent from "../ProjectContent";
import {
  ReactIcon,
  TypeScriptIcon,
  NextJsIcon,
  FramerMotionIcon,
  TailwindIcon,
  GitIcon,
} from "@/icons";

const Slider = dynamic(() => import("@/components/Slider"));

function Selleo() {
  return (
    <>
      <Slider
        imagesUrls={["/projects/selleo/selleoCert.webp"]}
        className="max-w-[800px]"
      />
      <ProjectContent
        title="Projects.Selleo.title"
        description="Projects.Selleo.desc"
        challange="Projects.Selleo.challange"
        techStack={
          <div className="flex flex-wrap gap-5 mt-2">
            <TypeScriptIcon />
            <ReactIcon />
            <FramerMotionIcon />
            <TailwindIcon />
            <GitIcon />
          </div>
        }
        whatLearnText="Projects.Selleo.whatLearn.text"
        whatLearnPoints={[
          "Projects.Selleo.whatLearn.whatLearnPoints.first",
          "Projects.Selleo.whatLearn.whatLearnPoints.second",
        ]}
      />
    </>
  );
}
export default Selleo;
