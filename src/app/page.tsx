import { Carousel } from "@/features/carousel";
import { AboutUs } from "@/widgets/AboutUs";
import { Contacts } from "@/widgets/Contacts";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Slider } from "@/widgets/Slider";
import { WhyUs } from "@/widgets/WhyUs";

export default function Home() {
  return (
    <div>
      <Header />

      <Slider />
      <div id="whyUs">
        <WhyUs />
      </div>

      <div id="brands" className="mb-[100px]">
        <Carousel />
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}
