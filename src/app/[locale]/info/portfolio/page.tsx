import Slider from "@/components/Slider";
import TimeLineComponent from "@/components/Timeline";
import Image from "next/image";

function Portfolio() {
  return (
    <div className="flex">
      <TimeLineComponent />
      <div className="flex justify-center h-full w-full mt-20">
        <Slider
          imagesUrls={[
            "/projects/befama/befama4.webp",
            "/projects/befama/befama.webp",
            "/projects/befama/befama3.webp",
          ]}
          className="max-w-[800px]"
          withControls
        />
      </div>
    </div>
  );
}
export default Portfolio;
