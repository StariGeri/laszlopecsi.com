import MarqueeText from "@/components/home/MarqueeText";
import Carousel from "@/components/shared/carousel/Carousel";
import { CarouselContent } from "@/constants/CarouselContent";

const Home = () => {
  return (
    <main className="min-h-screen h-fit px-3 md:px-0">
      <MarqueeText direction="left" />
      <Carousel items={CarouselContent}/>
    </main>
  )
}

export default Home;
