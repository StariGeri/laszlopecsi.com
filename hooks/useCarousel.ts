// Dependencies
import { useState } from 'react';

// Types
import { ArtModel } from '@/types/ArtModel';

export const useCarousel = (items: ArtModel[]) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // functions to to switch between slides
  const goPrev = () => setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  // Minimum swipe distance (in pixels) to trigger slide change
  const minSwipeDistance = 50;

  const handleTouchStart = (e: any) => {
    setTouchEnd(null); // Reset touchEnd to null on new touch
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goNext();
    } else if (isRightSwipe) {
      goPrev();
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      setTouchEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (!touchStart || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goNext();
    } else if (isRightSwipe) {
      goPrev();
    }
    setIsDragging(false);
  };

  return { activeIndex, setActiveIndex, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown, handleMouseMove, handleMouseUp, goPrev, goNext, isDragging };
};
