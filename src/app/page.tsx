import { Carousel } from "@/features/carousel";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Slider } from "@/widgets/Slider";

export default function Home() {
  return (
    <div>
      <Header />

      <Slider />
      <div
        id="whyUs"
        className="min-h-[40vh] bg-amber-200 flex flex-col items-center justify-center"
      ></div>
      <div
        id="aboutUs"
        className="min-h-[40vh] bg-amber-100 flex flex-col items-center justify-center"
      ></div>
      <div
        id="brands"
        className="min-h-[40vh] flex flex-col items-center justify-center"
      >
        <Carousel />
      </div>
      <div
        id="contacts"
        className="min-h-[40vh] bg-amber-900 flex flex-col items-center justify-center"
      ></div>
      <Footer />
    </div>
  );
}
