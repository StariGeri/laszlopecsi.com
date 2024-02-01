import Hero from "@/components/home/Hero";
import MarqueeText from "@/components/home/MarqueeText";
import Carousel from "@/components/shared/carousel/Carousel";
import { CarouselContent } from "@/constants/CarouselContent";

const Home = () => {
  return (
    <div className="overflow-hidden px-3">
      <Hero />
      <MarqueeText direction="left" />
      <Carousel items={CarouselContent} />
    </div>
  )
}

export default Home;