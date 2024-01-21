import React, { useState } from 'react';
import { SlideModel } from '@/types/SlideModel';
import Slide from './Slide';

interface CarouselProps {
    items: SlideModel[];
}

const Carousel = ({ items }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () => setActiveIndex((prev) => prev === 0 ? items.length - 1 : prev - 1);
    const goNext = () => setActiveIndex((prev) => prev === items.length - 1 ? 0 : prev + 1);

    return (
        <div className="relative w-full flex justify-center items-center">
            <button onClick={goPrev} className="absolute left-0 z-10 p-4">←</button>
            <div className="overflow-hidden w-full max-w-screen-md mx-auto">
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {items.map((item) => (
                        <div key={item.id} className="w-full flex-shrink-0">
                            <Slide slide={item} />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={goNext} className="absolute right-0 z-10 p-4">→</button>
        </div>
    );
};

export default Carousel;
