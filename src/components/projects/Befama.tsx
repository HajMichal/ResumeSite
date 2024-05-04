import dynamic from "next/dynamic";
import ProjectContent from "../ProjectContent";
import {
  ReactIcon,
  TypeScriptIcon,
  NextJsIcon,
  FramerMotionIcon,
  TailwindIcon,
} from "@/icons";

const Slider = dynamic(() => import("@/components/Slider"));

function Befama() {
  return (
    <>
      <Slider
        imagesUrls={[
          "/projects/befama/befama4.webp",
          "/projects/befama/befama.webp",
          "/projects/befama/befama3.webp",
        ]}
        className="max-w-[800px]"
        withControls
      />
      <ProjectContent
        title="Projects.Befama.title"
        links={[
          {
            linkLabel: "www.befama.com.pl",
            url: "https://www.befama.com.pl",
          },
          {
            linkLabel: "www.github.com/HajMichal/Befama",
            url: "https://github.com/HajMichal/Befama",
          },
        ]}
        description="Projects.Befama.desc"
        challange="Projects.Befama.challange"
        techStack={
          <div className="flex flex-wrap gap-5 mt-2">
            <TypeScriptIcon />
            <ReactIcon />
            <NextJsIcon />
            <FramerMotionIcon />
            <TailwindIcon />
          </div>
        }
        whatLearnText="Projects.Befama.whatLearn.text"
        whatLearnPoints={[
          "Projects.Befama.whatLearn.whatLearnPoints.first",
          "Projects.Befama.whatLearn.whatLearnPoints.second",
          "Projects.Befama.whatLearn.whatLearnPoints.third",
          "Projects.Befama.whatLearn.whatLearnPoints.fourth",
          "Projects.Befama.whatLearn.whatLearnPoints.fifth",
        ]}
      />
    </>
  );
}
export default Befama;
