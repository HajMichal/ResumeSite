import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="h-full flex flex-col tablet:flex-row tablet:h-screen">
      <Sidebar />
      <div className="flex justify-center w-full items-center flex-col desktop:flex-row">
        <Header />
        <Slider
          imagesUrls={["/myPhotos/main.png", "/myPhotos/subMain.png"]}
          className="max-w-[540px]"
          withIndicators
        />
      </div>
    </main>
  );
}
