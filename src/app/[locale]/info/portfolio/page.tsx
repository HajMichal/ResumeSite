import ProjectContent from "@/components/ProjectContent";
import TimeLineComponent from "@/components/Timeline";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/Slider"));

function Portfolio() {
  return (
    <div className="tablet:flex px-3 ">
      <TimeLineComponent />
      <div className="flex flex-wrap justify-evenly h-full w-full mt-20 p-5">
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
        />
      </div>
    </div>
  );
}
export default Portfolio;
