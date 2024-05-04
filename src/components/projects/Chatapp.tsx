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

function Chatapp() {
  return (
    <>
      <Slider
        imagesUrls={[
          "/projects/chatapp/chatAppLogin.webp",
          "/projects/chatapp/chatApp.webp",
        ]}
        className="max-w-[800px]"
        withControls
      />
      <ProjectContent
        title="Projects.Chatapp.title"
        links={[
          {
            linkLabel: "www.github.com/HajMichal/RealTimeChatApp",
            url: "https://github.com/HajMichal/RealTimeChatApp",
          },
          {
            linkLabel: "Workflow video",
            url: "https://github.com/HajMichal/RealTimeChatApp/blob/main/README.md",
          },
        ]}
        description="Projects.Chatapp.desc"
        challange="Projects.Chatapp.challange"
        techStack={
          <div className="flex flex-wrap gap-5 mt-2">
            <TypeScriptIcon />
            <ReactIcon />
            <FramerMotionIcon />
            <TailwindIcon />
            <ReactRouterIcon />
            <ExpressIcon />
            <PrismaIcon />
          </div>
        }
        whatLearnText="Projects.Chatapp.whatLearn.text"
        whatLearnPoints={[
          "Projects.Chatapp.whatLearn.whatLearnPoints.first",
          "Projects.Chatapp.whatLearn.whatLearnPoints.second",
          "Projects.Chatapp.whatLearn.whatLearnPoints.third",
          "Projects.Chatapp.whatLearn.whatLearnPoints.fourth",
          "Projects.Chatapp.whatLearn.whatLearnPoints.fifth",
        ]}
      />
    </>
  );
}
export default Chatapp;
