// Dependencies
import React, { useEffect, useState } from "react";

// Components
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import MarqueeText from "@/components/home/MarqueeText";
import Carousel from "@/components/shared/carousel/Carousel";
import CookieConsentModal from "@/components/cookies/CookieModal";

import { CarouselContent } from "@/constants/CarouselContent";

const Home = () => {

  const [showCookieModal, setShowCookieModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true') {
      setShowCookieModal(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieModal(false);
  };

  return (
    <div className="overflow-hidden px-3 md:px-6 lg:px-10">
      <Hero />
      <About />
      <MarqueeText direction="left" />
      <Carousel items={CarouselContent} />
      <CookieConsentModal isOpen={showCookieModal} onClose={handleConsent} />
    </div>
  )
}

export default Home;