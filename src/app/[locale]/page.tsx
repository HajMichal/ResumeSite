import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="h-full flex tablet:h-screen">
      <Drawer />
      <div className="laptop:flex justify-center w-full">
        <Slider
          imagesUrls={["/myPhotos/main.png", "/myPhotos/subMain.png"]}
          withIndicators
        />
        <Header />
      </div>
    </main>
  );
}
