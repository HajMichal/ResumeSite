import Drawer from "@/components/Drawer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="h-full w-screen overflow-hidden bg-background tablet:h-screen tablet:flex ">
      <Drawer />
      <div className="-mt-96 tablet:mt-0">
        <Slider
          imagesUrls={["/myPhotos/main.png", "/myPhotos/subMain.png"]}
          withIndicators
        />
      </div>
    </main>
  );
}
