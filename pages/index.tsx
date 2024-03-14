// Dependencies
import React, { useState } from "react";
import Head from "next/head";

// Components
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import MarqueeText from "@/components/home/MarqueeText";
import Carousel from "@/components/shared/carousel/Carousel";
import CookieConsentModal from "@/components/cookies/CookieModal";

// Types
import { ArtModel } from "@/types/ArtModel";

// Hooks
import { useCookieModal } from "@/hooks/useCookieModal";

// Services
import { fetchCarouselItems } from "@/services/api";
import useAsyncEffect from "use-async-effect";

const Home = () => {

  const { showCookieModal, handleConsent } = useCookieModal();

  const [carouselItems, setCarouselItems] = useState<ArtModel[]>();

  // fetch the 8,12,13,14 id arts from the database
  useAsyncEffect(async (isMounted) => {
    const ids = [8, 13,24,26];
    const items = await fetchCarouselItems(ids);

    if (!isMounted()) return;
    setCarouselItems(items);

  }, []);


  return (
    <div className="overflow-hidden px-3 md:px-6 lg:px-10">
      <Head>
        <title>Home | Laszlo Pecsi Art Collection</title>
        <meta name="description" content="A Journey Through Time and Texture: Exploring the Artistic Legacy of Laszlo Pecsi, a Renowned Textile Artist of the 20th Century, and the Exclusive Opportunity to Acquire his Masterpieces" />
        <meta property="og:image" content="/assets/images/laszlopecsiabout.png" />
        <meta name="keywords" content="Laszlo Pecsi, Art, Collection, Textile, Artist, 20th Century, Masterpieces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <MarqueeText direction="left" />
      {carouselItems ? <Carousel items={carouselItems} /> : <></>}
      <CookieConsentModal isOpen={showCookieModal} onClose={handleConsent} />
    </div>
  )
}

export default Home;