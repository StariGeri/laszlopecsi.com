import MarqueeText from "@/components/home/MarqueeText";
import Carousel from "@/components/shared/carousel/Carousel";
import { CarouselContent } from "@/constants/CarouselContent";

const Home = () => {
  return (
    <main className="h-screen">
      <MarqueeText direction="left" />
      <Carousel items={CarouselContent}/>
    </main>
  )
}

export default Home;
